describe("abs", () => {
  test("Hundred Points Symbol len2(16byte * 2).", () => {
    const s = "💯";
    expect(s.length).toBe(2);
  });

  test("sample02", () => {
    expect("\uD83D\uDCAF").toBe("\u{0001F4AF}");
  });
});
