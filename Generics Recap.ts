type SuperPrint = {
  <T, M>(a: T[], b: M): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], "X");
const b = superPrint([true, false, true], 1);
const c = superPrint(["1", "b", "true"], true);
const d = superPrint([1, 2, true, false, "hello"], []);
