describe("Student validations", () => {
  test("should validate a correct student name", () => {
    // ARRANGE
    const name = "Roba";

    // ACT
    const valid = name.length > 0;

    // ASSERT
    expect(valid).toBe(true);
  });

  test("should normalize a score", () => {
    // ARRANGE
    const score = 72;

    // ACT
    const normalized = Math.min(score, 100);

    // ASSERT
    expect(normalized).toBe(72);
  });

  test("should detect short content", () => {
    // ARRANGE
    const text = "Hi";

    // ACT
    const short = text.length < 5;

    // ASSERT
    expect(short).toBe(true);
  });
});