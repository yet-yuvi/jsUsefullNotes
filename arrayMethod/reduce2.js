const words = [
  'A',
  'Quick',
  'Brown',
  'Fox',
  'Jumps',
  'Over',
  'The',
  'Lazy',
  'Dog',
];

const reducedWords = words
  .reduce((acc, curr) => {
    const currentLetters = curr.toLowerCase().split('');
    const unicLetters = new Set(acc.concat(currentLetters));
    return Array.from(unicLetters);
  }, [])
  .sort();

console.log(reducedWords);
