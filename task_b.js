function getDigits(word) {
    const nums = word.match(/\d/g);
    
    console.log(`Length: ${nums ? nums.length : 0}  digits: ${ nums.join(",")}`);
  }
  
  getDigits("ag1aw5g6")
  getDigits("qulpi7ni8sa9")