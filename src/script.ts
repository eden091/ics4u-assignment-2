import { drawGraph } from "@ics4u-assignment-02/utils";

const form = document.getElementById("form") as HTMLElement;

const inputA = document.getElementsByName("a")[0] as HTMLInputElement;
const inputB = document.getElementsByName("b")[0] as HTMLInputElement;
const inputC = document.getElementsByName("c")[0] as HTMLInputElement;
const inputD = document.getElementsByName("d")[0] as HTMLInputElement;

const parameter1 = document.getElementById("p") as HTMLSpanElement;
const parameter2 = document.getElementById("q") as HTMLSpanElement;
const discriminant = document.getElementById("discriminant") as HTMLSpanElement;

const root1 = document.getElementById("root-one") as HTMLSpanElement;
const root2 = document.getElementById("root-two") as HTMLSpanElement;
const root3 = document.getElementById("root-three") as HTMLSpanElement;
const root = document.getElementById("root") as HTMLSpanElement;
const minimum = document.getElementById("minimum") as HTMLSpanElement;
const maximum = document.getElementById("maximum") as HTMLSpanElement;

const equation = document.getElementById("equation") as HTMLSpanElement;
const firstDer = document.getElementById("first-derivative") as HTMLSpanElement;
const secondDer = document.getElementById("second-derivative") as HTMLSpanElement;

const history = document.getElementById("history") as HTMLDivElement;

const canvas = document.getElementById("graph") as HTMLCanvasElement;

function getCoefficients() {
  const a = inputA.valueAsNumber;
  const b = inputB.valueAsNumber;
  const c = inputC.valueAsNumber;
  const d = inputD.valueAsNumber;

  return { a, b, c, d };
}

function calculate() {
  const { a, b, c, d } = getCoefficients();

  const p = (3 * a * c - b * b) / (3 * a * a);
  const q = (27 * a * a * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3);

  parameter1.textContent = p.toString();
  parameter2.textContent = q.toString();

  const dis = (q / 2) ** 2 + (p / 3) ** 3;

  discriminant.textContent = dis.toString();

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

    root.textContent = "3 Distinct Real Roots";
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

    root.textContent = "1 Real Root, 2 Complex Roots";
  }

  //case c : triple root and double root
  if (dis === 0) {
    //triple root
    if (p === 0 && q === 0) {
      const u = Math.cbrt(-q / 2 + Math.sqrt((q / 2) ** 2 + (p / 3) ** 3));
      const v = Math.cbrt(-q / 2 - Math.sqrt((q / 2) ** 2 + (p / 3) ** 3));

      const y = u + v;
      const x = y - b / (3 * a);

      root1.textContent = `x: ${x.toString()} | y: 0.0000`;
      root2.textContent = `x: ${x.toString()} | y: 0.0000`;
      root3.textContent = `x: ${x.toString()} | y: 0.0000`;

      root.textContent = "Triple Real Roots";
    }

    //double root and single root
    if (p !== 0) {
      const u = Math.cbrt(-q / 2 + Math.sqrt((q / 2) ** 2 + (p / 3) ** 3));
      const v = Math.cbrt(-q / 2 - Math.sqrt((q / 2) ** 2 + (p / 3) ** 3));

      const y = u + v;
      const x = y - b / (3 * a);

      root1.textContent = `x: ${x.toString()} | y: 0.0000`;
      root2.textContent = `x: ${x.toString()} | y: 0.0000`;

      const x2 = -u - b / (3 * a);

      root3.textContent = `x: ${x2.toString()} | y: 0.0000`;

      root.textContent = "Double Real Roots, Single Real Root";
    }
  }
}

function derivatives() {
  const { a, b, c, d } = getCoefficients();

  equation.textContent = `${a}x³ + ${b}x² + ${c}x + ${d}`;

  const aValue1 = a * 3;
  const bValue1 = b * 2;
  const cValue1 = c;

  const firstDerivative = `${aValue1}x² + ${bValue1}x + ${cValue1}`;

  firstDer.textContent = firstDerivative;

  const aValue2 = aValue1 * 2;
  const bValue2 = bValue1;

  const secondDerivative = `${aValue2}x + ${bValue2}`;

  secondDer.textContent = secondDerivative;
}

function minMaxPoints() {
  const { a, b, c, d } = getCoefficients();

  const derivativeDiscriminant = (2 * b) ** 2 - 4 * (3 * a) * c;

  if (derivativeDiscriminant <= 0 || a === 0) {
    minimum.textContent = "x: N/A | y: N/A";
    maximum.textContent = "x: N/A | y: N/A";
    return;
  }

  const x1 = (-2 * b + Math.sqrt(derivativeDiscriminant)) / (6 * a);
  const x2 = (-2 * b - Math.sqrt(derivativeDiscriminant)) / (6 * a);
  const y1 = a * x1 ** 3 + b * x1 ** 2 + c * x1 + d;
  const y2 = a * x2 ** 3 + b * x2 ** 2 + c * x2 + d;

  const secondDerivative = 6 * a * x1 + 2 * b;

  if (secondDerivative < 0) {
    maximum.textContent = `(${x1.toFixed(4)}, ${y1.toFixed(4)})`;
    minimum.textContent = `(${x2.toFixed(4)}, ${y2.toFixed(4)})`;
  } else {
    maximum.textContent = `(${x2.toFixed(4)}, ${y2.toFixed(4)})`;
    minimum.textContent = `(${x1.toFixed(4)}, ${y1.toFixed(4)})`;
  }
}

function saveCoefficients() {
  const { a, b, c, d } = getCoefficients();

  const row = document.createElement("div");
  row.className = "flex items-center gap-2 mb-3";

  const memory = document.createElement("button");
  memory.type = "button";
  memory.className =
    "flex-1 grid grid-cols-4 gap-2 p-3 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800/70 font-mono text-sm text-center";

  [a, b, c, d].forEach((coeff) => {
    const coefficient = document.createElement("span");
    coefficient.textContent = coeff.toString();
    memory.appendChild(coefficient);
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "px-3 py-2 rounded-lg border border-red-800 bg-red-950/40 text-red-400 hover:bg-red-950 font-mono text-sm";

  deleteButton.addEventListener("click", () => {
    row.remove();
  });

  row.appendChild(memory);
  row.appendChild(deleteButton);
  history.appendChild(row);
}

function drawCubicGraph() {
  const { a, b, c, d } = getCoefficients();

  const x1 = Number.parseFloat(root1.textContent?.replace("x: ", "") ?? "");
  const x2 = Number.parseFloat(root2.textContent?.replace("x: ", "") ?? "");
  const x3 = Number.parseFloat(root3.textContent?.replace("x: ", "") ?? "");

  drawGraph(
    { a, b, c, d },
    {
      r1: { x: x1, y: 0 },
      r2: { x: x2, y: 0 },
      r3: { x: x3, y: 0 },
    },
    canvas,
  );
}

//update
form.addEventListener("input", (event) => {
  event.preventDefault();

  drawCubicGraph();
  minMaxPoints();
  derivatives();
  calculate();
});

//save button
function saveButton() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    saveCoefficients();
  });
}

saveButton();