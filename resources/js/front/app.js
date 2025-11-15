import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

// Smooth scroll setup
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP ScrollTrigger sync
lenis.on("scroll", ScrollTrigger.update);

const mainCursor = document.querySelector(".cursor-main");
const outlines = document.querySelectorAll(".cursor-outline");

let mouse = { x: 0, y: 0 };
let mainPos = { x: 0, y: 0 };
let outlinePos = Array.from(outlines).map(() => ({ x: 0, y: 0 }));

// Update mouse position
document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

gsap.ticker.add(() => {
    // Smooth main cursor movement
    mainPos.x += (mouse.x - mainPos.x) * 0.2;
    mainPos.y += (mouse.y - mainPos.y) * 0.2;
    gsap.set(mainCursor, { x: mainPos.x, y: mainPos.y });

    // Determine outline color dynamically
    const outlineColor = "#78ae28";

    // Animate outlines
    outlines.forEach((outline, i) => {
        const target = i === 0 ? mainPos : outlinePos[i - 1];
        outlinePos[i].x += (target.x - outlinePos[i].x) * 0.15;
        outlinePos[i].y += (target.y - outlinePos[i].y) * 0.15;

        gsap.set(outline, { x: outlinePos[i].x, y: outlinePos[i].y, borderColor: outlineColor });
    });
});
