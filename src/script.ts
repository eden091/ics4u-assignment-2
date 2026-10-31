const form = document.getElementById("form") as HTMLElement;

form.addEventListener("input", (event) => {
  event.preventDefault();

  //element id's
  const a = (document.getElementsByName("a")[0] as HTMLInputElement).valueAsNumber;
  const b = (document.getElementsByName("b")[0] as HTMLInputElement).valueAsNumber;
  const c = (document.getElementsByName("c")[0] as HTMLInputElement).valueAsNumber;
  const d = (document.getElementsByName("d")[0] as HTMLInputElement).valueAsNumber;
  const parameter1 = document.getElementById("p") as HTMLSpanElement;
  const parameter2 = document.getElementById("q") as HTMLSpanElement;
  const discriminant = document.getElementById("discriminant") as HTMLSpanElement;
  const root1 = document.getElementById("root-one") as HTMLSpanElement;
  const root2 = document.getElementById("root-two") as HTMLSpanElement;
  const root3 = document.getElementById("root-three") as HTMLSpanElement;

  //parameters
  const p = (3 * a * c - b * b) / (3 * a * a);
  const q = (27 * a * a * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3);

  parameter1.textContent = p.toString();
  parameter2.textContent = q.toString();

  //discriminant
  const dis = (q / 2) * (q / 2) + (p / 3) ** 3;

  discriminant.textContent = d.toString();

  //case a : 3 distinct real roots
  if (dis < 0) {
    const theta = (1 / 3) * Math.acos(-q / (2 * Math.sqrt((-p / 3) ** 3)));
    const y1 = 2 * Math.sqrt(-p / 3) * Math.cos(theta);
    const y2 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI) / 3);
    const y3 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI) / 3);
    const x1 = y1 - b / (3 * a);
    const x2 = y2 - b / (3 * a);
    const x3 = y3 - b / (3 * a);

    root1.textContent = `x: ${x1.toString()} | y: 0.0000`;
    root2.textContent = `x: ${x2.toString()} | y: 0.0000`;
    root3.textContent = `x: ${x3.toString()} | y: 0.0000`;
  }

  //case b : 1 real root and 2 complex roots
  if (dis > 0) {
    const u = Math.cbrt(-q / 2 + Math.sqrt((q / 2) ** 2 + (p / 3) ** 3));
    const v = Math.cbrt(-q / 2 - Math.sqrt((q / 2) ** 2 + (p / 3) ** 3));
    const y = u + v;
    const x = y - b / (3 * a);

    root1.textContent = `x: ${x.toString()} | y: 0.0000`;
    root2.textContent = `x: Imaginary | y: Imaginary`;
    root3.textContent = `x: Imaginary | y: Imaginary`;
  }

  //case c : triple root and double root
  if (dis === 0) {
    if (p === q && q === 0) {
      const u = Math.cbrt(-q / 2 + Math.sqrt((q / 2) ** 2 + (p / 3) ** 3));
      const v = Math.cbrt(-q / 2 - Math.sqrt((q / 2) ** 2 + (p / 3) ** 3));
      const y = u + v;
      const x = y - b / (3 * a);

      root1.textContent = `x: ${x.toString()} | y: 0.0000`;
      root2.textContent = `x: ${x.toString()} | y: 0.0000`;
      root3.textContent = `x: ${x.toString()} | y: 0.0000`;
    }

    if (p !== 0) {
      const u = Math.cbrt(-q / 2 + Math.sqrt((q / 2) ** 2 + (p / 3) ** 3));
      const v = Math.cbrt(-q / 2 - Math.sqrt((q / 2) ** 2 + (p / 3) ** 3));
      const y = u + v;
      const x = y - b / (3 * a);

      root1.textContent = `x: ${x.toString()} | y: 0.0000`;

      const r = -Math.cbrt(4 * q);
      const x2 = r - b / (3 * a);

      root2.textContent = `x: ${x2.toString()} | y: 0.0000`;
      root3.textContent = `x: ${x2.toString()} | y: 0.0000`;

    }
  }


  
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
