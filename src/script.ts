import type { Coefficients } from "@ics4u-assignment-02/types";

const form = document.getElementById("form");

form?.addEventListener("input", (event) => {
  event.preventDefault();

  const aValue = document.getElementsByName("a")[0] as HTMLInputElement;
  const aCoeff = aValue.valueAsNumber;
  const bValue = document.getElementsByName("b")[0] as HTMLInputElement;
  const bCoeff = bValue.valueAsNumber;
  const cValue = document.getElementsByName("c")[0] as HTMLInputElement;
  const cCoeff = cValue.valueAsNumber;
  const dValue = document.getElementsByName("d")[0] as HTMLInputElement;
  const dCoeff = dValue.valueAsNumber;

  const coeff: Coefficients = {
    a: aCoeff,
    b: bCoeff,
    c: cCoeff,
    d: dCoeff
  };

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
