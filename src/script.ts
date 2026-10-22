import type { Coefficients } from "@ics4u-assignment-02/types";

const form = document.getElementById("form") as HTMLElement;

form.addEventListener("input", (event) => {
  event.preventDefault();

  const aValue = (document.getElementsByName("a")[0] as HTMLInputElement).valueAsNumber;
  const bValue = (document.getElementsByName("b")[0] as HTMLInputElement).valueAsNumber;
  const cValue = (document.getElementsByName("c")[0] as HTMLInputElement).valueAsNumber;
  const dValue = (document.getElementsByName("d")[0] as HTMLInputElement).valueAsNumber;

  const coeff: Coefficients = {
    a: aValue,
    b: bValue,
    c: cValue,
    d: dValue
  }

  console.log(coeff);
})

import { drawGraph } from "@ics4u-assignment-02/utils";

const canvas = document.getElementById("graph") as HTMLCanvasElement;

drawGraph(
  { a: 0, b: 0, c: 0, d: 0 },
  {
    r1: { x: 0, y: 0 },
    r2: { x: 0, y: 0 },
    r3: { x: 0, y: 0 },
  },
  canvas,
);
