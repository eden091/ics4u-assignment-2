import type { Coefficients } from "./types";

const form = document.getElementById("form");
const aValue = documentgetElementsByName("a");

const coeff : Coefficients = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

console.log(coeff)

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
