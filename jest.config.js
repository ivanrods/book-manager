/** @type {import("jest").Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"], // ou ajuste o caminho se estiver diferente
  clearMocks: true,
};
