const cnt = process.argv.length - 2; // Exclude 'node' and script name
if (cnt === 0) {
  console.log("No argument");
} else {
  console.log("Arguments found");
}
