let size = process.argv[2];

if (isNaN(size)) {
  console.log("Missing size");
} else {
  size = parseInt(size);

  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
