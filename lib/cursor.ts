export const followCursor = () => {
    // const cursor = document.querySelector("span.cursor");
    const body = document.querySelector("body");

    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    body.appendChild(cursor);

    console.log("LOADED");

    let timeout;

    function fancyCursor(e) {
        let halfCursorSize = 12;
        let halfTrailSize = 40;
        let scaleMin = 0.35;
        let scaleMax = 1.0;
        let finalX = e.pageX - halfCursorSize;
        let finalY = e.pageY - halfCursorSize;
        let finalTrailX = e.pageX - halfTrailSize;
        let finalTrailY = e.pageY - halfTrailSize;

        cursor.style.transform =
            "translate(" +
            finalX +
            "px," +
            finalY +
            "px) scale(" +
            scaleMin +
            ")";

        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }

        timeout = window.setTimeout(function () {
            cursor.style.transform =
                "translate(" +
                finalX +
                "px," +
                finalY +
                "px) scale(" +
                scaleMax +
                ")";
        }, 250);
        cursor.style.opacity = "1";
    }

    function cursorLoader() {
        body.addEventListener("mousemove", fancyCursor);

        body.addEventListener(
            "mouseleave",
            () => {
                cursor.style.opacity = "0";
            },
            false
        );

        window.addEventListener("scroll", function (e) {
            cursor.style.opacity = "0";
        });
    }

    function init() {
        cursorLoader();

        function animate() {
            requestAnimationFrame(animate);
        }

        animate();
    }

    init();
};
