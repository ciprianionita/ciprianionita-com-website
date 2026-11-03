"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid email address",
        };
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let response;

    try {
        response = await resend.emails.send({
            from: "ciprianionita.com <no-reply@ciprianionita.com>",
            to: "ciprian@ciprianionita.com",
            subject: "CiprianIonita.com - New Message",
            replyTo: senderEmail as string,
            // text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    // Resend returns API failures in the response instead of throwing
    if (response.error) {
        return {
            error: getErrorMessage(response.error),
        };
    }

    return {
        data: response.data,
    };
};
