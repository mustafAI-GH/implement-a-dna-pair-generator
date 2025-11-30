function pairElement(str) {

  const pairs = {

    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  const result = [];

  for (let i = 0; i < str.length; i++) {

    let char = str[i];
    
    result.push([char, pairs[char]]);
  }
  
  return result
}

console.log(pairElement("ATCGA"));
