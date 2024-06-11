import { fetchFirstFileSize, fetchSumOfFileSizes } from "./index.js";

test("fetchFirstFileSize returns size of first file", async () => {
  const size = await fetchFirstFileSize("A");
  expect(size).toBe(13);
});

test("fetchSumOfFileSizes returns sum of file sizes", async () => {
  const total = await fetchSumOfFileSizes("A");
  expect(total).toBe(304);
});
