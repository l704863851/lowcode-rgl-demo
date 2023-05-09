const { name, version } = require("./package.json");

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library: "rgl-demo",
        engineScope: "@alilc",
        noParse: true,
        npmInfo: {
          package: name,
          version,
        },
        lowcodeDir: "lowcode",
      },
    ],
  ],
};
