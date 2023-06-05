function firstUniqueCharacter(s) {
    
    const charCount = new Map();
  
    g.
    for (let i = 0; i < s.length; i++) {
      
      if (!charCount.has(s[i])) {
        charCount.set(s[i], 1);
      } else {
       
        charCount.set(s[i], charCount.get(s[i]) + 1);
      }
    }
  
    // Iterate over the map.
    for (const [character, count] of charCount.entries()) {
      // If the count is 1, then the character is not repeating.
      if (count === 1) {
        // Return the index of the character.
        return s.indexOf(character);
      }
    }
  
    
    return -1;
  }
  