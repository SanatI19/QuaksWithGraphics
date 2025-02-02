function greet(name, ebola) {
    console.log("Hello, " + name + "!");
    console.log(ebola)
  }
  
  setTimeout(greet, 2000, "Alice", 10000);