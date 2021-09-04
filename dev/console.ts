// To learn more about Fig's autocomplete standard visit: https://fig.io/docs/concepts/cli-skeleton

// The below is a dummy example for git. Make sure to change the file name!
const completionSpec: Fig.Spec = {
  name: "console",
  description: "Open the console for an enviornment",
  subcommands: [
    {
      name: "stg",
      description: "Open the console for staging enviornment",

      // If a subcommand or option takes an argument, you must include the args prop, even if it's an empty object (like below)
      // If you want to build custom suggestions for arguments check out: https://fig.io/docs/concepts/dynamic-suggestions
      args: {},
    },
    {
      name: "prd",
      description: "Open the console for production enviornment",
      args: {},
    },
  ],

  options: [
    {
      name: ["-v", "--version"],
      description: "View your current git version",
    },
  ],
};

export default completionSpec;
