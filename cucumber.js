module.exports = {
    default: {
      require: ["./src/tests/step-def/*.ts"],
      requireModule: ["ts-node/register"],
      format: ["json:./generate_report.json"],
      paths: ["./src/tests/features/*.feature"],
      timeout: 60000,
    },
  };
  