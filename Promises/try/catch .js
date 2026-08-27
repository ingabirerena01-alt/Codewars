function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
} catch (error) {
  console.log("Error:", error.message);
}

function add(a, b) {
  if (a === 0 || b === 0) {
    throw new Error("Cannot add zero!");
  } else {
    return a + b;
  }
}

try {
  console.log(add(9, 5));
} catch (error) {
  console.log("Error:", error.name);
  console.log("Error:", error.message);
}
