const fakeAI = {
  clarityScore: 72,
  issues: ["Manque exemples"],
  recommendations: ["Ajouter cas"],
};

function transformAI(response) {
  return {
    score: response.clarityScore,
    issues: response.issues,
    recommendations: response.recommendations,
  };
}

test("should transform AI response", () => {
  // ARRANGE
  const ai = fakeAI;

  // ACT
  const result = transformAI(ai);

  // ASSERT
  expect(result.score).toBe(72);
  expect(result.issues).toHaveLength(1);
  expect(result.recommendations).toHaveLength(1);
});