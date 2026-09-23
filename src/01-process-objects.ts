//env variablesS
//command line arguments
//exit code

//process lifestcycle events

// read CLI arguments in scripts

// process.env

import process from "node:process";

//dotenv

//const nodeEnv = process.env.NODE_ENV || 'development'

//process.env values are always strings, so we need to convert them to the correct type

// const port = Number(process.env.PORT) || 3000

// process.argv ->

// [
//     "path/to/node",
//     "path/to/script.js",
//     "src/01-process-objects.ts",
//     "start",
//     "arg1",
//     "arg2",
//     "arg3"
// ]

const command = process.argv[2] || "start";

// fail flag
// crash flag

const shouldFail = process.argv.includes("--fail");
const shouldCrash = process.argv.includes("--crash");

//do not start async here
//node is alraedy shutting down
//final log, final cleanup,

process.on("exit", (code) => {
  console.log(`Process is exiting with code: ${code}`);
});

function runApp(): void {
  console.log(`Running command: ${command}`);

  if (shouldFail) {
    console.error("Manual failure triggered with --fail.");
    process.exit(1); // Exit with a non-zero code to indicate failure
    console.log("process.argv:", process.argv);
  }

  if (shouldCrash) {
    console.error("Manual crash triggered with --crash.");
    process.exit(1); // Exit with a non-zero code to indicate failure
    console.log("shouldCrash:", shouldCrash);
  }
}

runApp();
