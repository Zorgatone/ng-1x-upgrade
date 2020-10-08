import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },
        ],
      },
      {
        test: require.resolve("angular"),
        use: [
          {
            loader: "imports-loader",
            options: {
              type: "commonjs",
              imports: {
                moduleName: "jquery",
                name: "$",
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
    host: "127.0.0.1",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".htm", ".html"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};

export default config;
