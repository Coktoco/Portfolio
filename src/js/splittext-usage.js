import { SplitText } from "../../assets/splitText.js";

const timeline = new TimelineLite();

const text = new SplitText(".title");

// Shuffle to randomize the letters in array
const shuffledChars = gsap.utils.shuffle(text.chars);

gsap.set(shuffledChars, {
    transformOrigin: "1% 1em",
});

timeline.staggerFromTo(
    shuffledChars,
    0.5,
    {
        opacity: 0,
    },
    {
        opacity: 1,
    },
    0.06 
);