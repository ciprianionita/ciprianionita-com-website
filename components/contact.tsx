"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-white/80 -mt-6">
                Please contact me directly at{" "}
                <a
                    className="underline"
                    href="mailto:ciprian@ciprianionita.com"
                >
                    ciprian@ciprianionita.com
                </a>{" "}
                or through this form.
            </p>
            <form
                className="flex flex-col mt-10 text-black"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email sent successfully!");
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
                    type="email"
                    name="senderEmail"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg p-4 bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                ></textarea>
                <SubmitBtn />
            </form>
        </motion.section>
    );
}
