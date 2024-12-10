import test, { expect } from "@playwright/test";

const a = [2, 5, 10];
const b = [3, 7, 11];
const expected = [5, 12, 21];

for (let i = 0; i < a.length; i++) {
  test(`Data driven test ${a[i]} + ${b[i]} = ${expected[i]}`, async () => {
    expect(a[i] + b[i]).toBe(expected[i]);
  });
}

const testData = [
  {
    n: "Should do something",
    a: 2,
    b: 3,
    e: 5,
  },
  {
    n: "Should do something 2",
    a: 5,
    b: 7,
    e: 12,
  },
  {
    n: "Should do something 3",
    a: 10,
    b: 11,
    e: 21,
  },
];

for (const { n, a, b, e } of testData) {
  test(n, async () => {
    expect(a + b).toBe(e);
  });
}
