function greet(name) {
  if (!name) {
    return "Hello, Guest";
  }
  return "Hello, " + name.toUpperCase();
}

console.log(greet());
