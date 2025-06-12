const values = process.argv.slice(2); // Exclude 'node' and script name
if (values[0] == undefined) {
  console.log("No argument");
} else {
  console.log(values[0]);
}
