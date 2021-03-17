console.log('/////////////Splice///////////');
const htmlColorNames = ['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick'];
htmlColorNames.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond'); // this took the first two items and replaced them with the new items
console.log(htmlColorNames);