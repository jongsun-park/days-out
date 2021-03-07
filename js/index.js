import Cursor from "./cursor";
import { gsap } from "gsap";
import "./post";
import "./subscribe";

const body = document.querySelector("body");

window.onload = () => {
  body.classList.remove("loading");
  gsap.from(body, {
    opacity: 0,
    duration: 1,
  });
  const cursor = new Cursor(document.querySelector(".cursor"));
};
