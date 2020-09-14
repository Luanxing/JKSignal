const fs = require('fs');

const data = fs.readdirSync('./');

const images = data.filter(file => /\.jpg$/.test(file));
const previous = images.map(file => file.replace(/(@\dx)?\.jpg/, ''));
const uniq = [...new Set(previous)];
const toCamelCase = uniq.map(file =>
  file.replace(/(?:[\W_]+)(\w)/g, (match, $1) => $1.toUpperCase())
);
const imp = uniq.reduce((pre, cur) => {
  const item = `const ${cur} = require('./${cur}.jpg');\n`;
  return pre + item;
}, '');

// const exp = uniq.reduce((pre, cur) => {
//     const item = `const ${cur} = require('./${cur}.png')\n`;
//     return pre + item;
//   }, '');

const exp = `\nexport default { ${toCamelCase.join(', ')} };`;

console.log(previous);
console.log(imp, exp);

fs.writeFileSync('./index.ts', imp + exp);
