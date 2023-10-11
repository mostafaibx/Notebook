import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "../plugin/unpckg-path.plugin";
import { fetchPlugin } from "../plugin/fetch-plugin";

let service: esbuild.Service;

//Implementing code bundler as a function that takes
//input as a string and returns a promise with the bundled code
export default async (rawCode: string) => {
  //to prevent service from running unnessesary.
  if (!service) {
    service = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  }
  try {
    const result = await service.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
      define: { global: "window", "process.env.NODE_ENV": '"production"' },
      jsxFactory: "_React.createElement",
      jsxFragment: "_React.Fragment",
    });

    return { code: result.outputFiles[0].text, err: "" };
  } catch (err: any) {
    return { code: "", err: err.message };
  }
};
