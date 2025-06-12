const first = process.argv[2];

if (!isNaN(first) && first !== undefined) {
  console.log(`My number: ${parseInt(first)}`);
} else if (isNaN(first)) {
  console.log("Not a number");
}
