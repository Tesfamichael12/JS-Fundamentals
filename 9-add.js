let [num1, num2] = process.argv.slice(2);

function add(a, b) {
  console.log(parseInt(a) + parseInt(b));
}

add(num1, num2);
