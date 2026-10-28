const form = document.getElementById("form") as HTMLElement;

form.addEventListener("input", (event) => {
  event.preventDefault();

  const aValue = (document.getElementsByName("a")[0] as HTMLInputElement).valueAsNumber;
  const bValue = (document.getElementsByName("b")[0] as HTMLInputElement).valueAsNumber;
  const cValue = (document.getElementsByName("c")[0] as HTMLInputElement).valueAsNumber;
  const dValue = (document.getElementsByName("d")[0] as HTMLInputElement).valueAsNumber;
  const parameter1 = document.getElementById("p") as HTMLSpanElement;
  const parameter2 = document.getElementById("q") as HTMLSpanElement;
  const discriminant = document.getElementById("discriminant") as HTMLSpanElement;

  //parameters
  const p = (3 * aValue * cValue - bValue * bValue) / (3 * aValue * aValue);
  const q = (27 * aValue * aValue * dValue - 9 * aValue * bValue * cValue + 2 * bValue ** 3) / (27 * aValue ** 3);

  parameter1.textContent = p.toString();
  parameter2.textContent = q.toString();

  //discriminant
  const d = (q / 2) * (q / 2) + (p / 3) ** 3;

  discriminant.textContent = d.toString();

  //case 1 : 3 distinct real roots
  const k = 2 * Math.sqrt(-p / 3);
  const theta = (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-1 * (p / 3) ** 3)));
  const y1 = 2* Math.sqrt(-p / 3) * Math.cos(theta);
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
