const fs = require('fs');
const html = fs.readFileSync('samiul.html', 'utf8');

// Find all img tags
const imgs = html.match(/<img[^>]+>/gi) || [];
console.log('Total img tags:', imgs.length);
imgs.slice(0, 10).forEach(i => console.log('IMG:', i));

// Let's search for Samiul or avatar or profile in html
const matches = [];
let idx = 0;
while ((idx = html.indexOf('Samiul', idx + 1)) !== -1 && matches.length < 5) {
  matches.push(html.substring(Math.max(0, idx - 150), Math.min(html.length, idx + 250)));
}
console.log('--- Context around Samiul ---');
matches.forEach((m, i) => console.log(`Match ${i+1}:\n`, m, '\n'));
