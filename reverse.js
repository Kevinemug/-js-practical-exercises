const reverse= str => {
    const words = str.split(' ');
  
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    const result = reversedWords.join(' ');
  
    return result;
  }
