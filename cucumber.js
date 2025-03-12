module.exports = {
    default: {
      require: ["./step-def/*.ts"],
      requireModule: ["ts-node/register"],
      format: ["progress"],
      paths: ["./features/*.feature"],
      timeout: 60000,
    },
  };
  