import { register } from "@tokens-studio/sd-transforms";
import { transformGroups, formats } from "style-dictionary/enums";

import StyleDictionary from "style-dictionary";

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
register(StyleDictionary);

const sd = new StyleDictionary({
  // make sure to have source match your token files!
  // be careful about accidentally matching your package.json or similar files that are not tokens
  source: ["test_single_file/**/*.json"],
  log: {
    verbosity: "verbose",
  },
  preprocessors: ["tokens-studio"], // <-- since 0.16.0 this must be explicit
  platforms: {
    scss: {
      transformGroup: "tokens-studio",
      buildPath: "build/",
      files: [
        {
          destination: "variables.scss",
          format: "scss/variables",
          // format: formats.scssVariables,
        },
      ],
    },
    // ...
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
