const form = document.getElementById("form") as HTMLElement;
const parameter1 = document.getElementById("p") as HTMLSpanElement;
const parameter2 = document.getElementById("q") as HTMLSpanElement;

form.addEventListener("input", (event) => {
  event.preventDefault();

  const aValue = (document.getElementsByName("a")[0] as HTMLInputElement).valueAsNumber;
  const bValue = (document.getElementsByName("b")[0] as HTMLInputElement).valueAsNumber;
  const cValue = (document.getElementsByName("c")[0] as HTMLInputElement).valueAsNumber;
  const dValue = (document.getElementsByName("d")[0] as HTMLInputElement).valueAsNumber;

  const p = (3 * aValue * cValue - bValue * bValue) / (3 * aValue * aValue);
  const q = (27 * aValue * aValue * dValue - 9 * aValue * bValue * cValue + 2 * bValue ** 3) / (27 * aValue ** 3);

  parameter1.textContent = p.toString();
  parameter2.textContent = q.toString();
});

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
