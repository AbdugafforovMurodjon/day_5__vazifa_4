function cut(matn, indeks) {
    if (indeks < 0) {
      return matn.substring(0);
    } else {
      return matn.substring(indeks);
    }
  }
  
  console.log(cut("Hello", 1)); 
  console.log(cut("Assalomu alaykum", 8)); 
  
  