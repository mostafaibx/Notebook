import axios from "axios";
import * as esbuild from "esbuild-wasm";
import localforage from "localforage";

const fileCache = localforage.createInstance({ name: "filecache" });

export const fetchPlugin = (inputCode: string) => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      build.onLoad({ filter: /(^index\.js$)/ }, () => {
        return {
          loader: "jsx",
          contents: inputCode,
        };
      });

      // handle css builds
      build.onLoad({ filter: /.css$/ }, async (args: any) => {
        const cachedResults = await fileCache.getItem(args.path);
        if (cachedResults) {
          return cachedResults;
        }

        const { data, request } = await axios.get(args.path);
        const escaped = data
          .replace(/\n/g, "")
          .replace(/"/g, '\\"')
          .replace(/'/g, "\\'");

        const contents = `
          const style = document.createElement('style');
          style.innerText = '${escaped}';
          document.head.appendChild(style);
        `;

        const result = {
          loader: "jsx",
          contents,
          resolveDir: new URL("./", request.responseURL).pathname,
        };
        await fileCache.setItem(args.path, result);
        return result;
      });

      //handle jsx builds
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        const cachedResults = await fileCache.getItem(args.path);
        if (cachedResults) {
          return cachedResults;
        }

        const { data, request } = await axios.get(args.path);

        const result = {
          loader: "jsx",
          contents: data,
          resolveDir: new URL("./", request.responseURL).pathname,
        };
        await fileCache.setItem(args.path, result);
        return result;
      });
    },
  };
};
