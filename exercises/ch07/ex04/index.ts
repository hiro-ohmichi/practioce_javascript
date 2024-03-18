const data = [
  { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
  { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
  { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
  { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
  { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
  { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
  { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
  { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
  { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

// 1. `math`の全員の合計点
const mathTotal = data.reduce((total, student) => total + student.math, 0);
console.log(mathTotal);

// 2. クラスAの`chemistry`の平均点
const classAArray = data.filter((student) => student.class === "A");
const classAChemistryAvg =
  classAArray.reduce((total, student) => total + student.chemistry, 0) /
  classAArray.length;
console.log(classAChemistryAvg);

// 3. 3科目合計点のクラスC内での平均点
const classCArray = data.filter((student) => student.class === "C");
const classCAverage =
  classCArray.reduce(
    (total, student) =>
      total + student.math + student.chemistry + student.geography,
    0
  ) /
  (classCArray.length * 3);

console.log(classCAverage);

// 4. 3科目合計点が最も高い人の`name
const highestTotalStudent = data.reduce(
  (highestPerson, current) => {
    const currentTotal = current.math + current.chemistry + current.geography;
    return currentTotal > highestPerson.total
      ? { name: current.name, total: currentTotal }
      : highestPerson;
  },
  { name: "", total: -1 }
);
console.log(highestTotalStudent);

// 5. 全体の`geography`の標準偏差
const geographyAvgSquare =
  (data.reduce((total, student) => total + student.geography, 0) /
    data.length) **
  2;
const geographyMeanSquare =
  (1 / data.length) *
  data.reduce((total, student) => total + student.geography ** 2, 0);
const geographyStdDev = Math.sqrt(geographyMeanSquare - geographyAvgSquare);
console.log(geographyStdDev);
