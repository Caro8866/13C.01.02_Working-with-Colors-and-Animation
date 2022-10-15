"use strict";
import { animate, scroll, stagger, timeline, inView } from "https://cdn.skypack.dev/motion";

// PAGE PROGRESS AT TOP
scroll(animate(".progress", { scaleX: [0, 1] }));

const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  toggleBtn.classList.toggle("toggled");
});
