function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution: Iterate through the array and call greeter for each element
for (const name of user) {
  console.log(greeter(name));
}
// Or use map to achieve the same result in a more concise way:
user.map(name => console.log(greeter(name)));