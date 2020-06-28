import 'bootstrap';
import 'bootswatch/dist/superhero/bootstrap.min.css'; 
import { aliasForName, categories } from './codepages.js';
import iconv from 'iconv-lite';

const text = document.getElementById('text');
const hex = document.getElementById('hex');
const encodingSelector = document.getElementById('encodingSelector');

function updateHexFromText() {
  const encodingName = encodingSelector.value;
  const encodingAlias = aliasForName[encodingName];
  const encoded = iconv.encode(text.value, encodingAlias);

  const bytesAsHex = [];
  encoded.forEach(byte => bytesAsHex.push(byte.toString(16).padStart(2, '0')));

  hex.value = bytesAsHex.join(' ');
}

function updateTextFromHex() {
  const encodingName = encodingSelector.value;
  const encodingAlias = aliasForName[encodingName];

  const bytes = [];
  hex.value.replace(/0x/g, '').replace(/\s+/g, ' ').split(' ').forEach((unit) => {
    unit = unit.replace(/^0+[0-9][0-9]/, '');

    for (let i = 0; i < unit.length; i += 2) {
      const byteText = unit.slice(i, i + 2);
      const int = parseInt(byteText, 16);
      bytes.push(int || 0);
    }
  });

  const buffer = Buffer.from(bytes);
  text.value = iconv.decode(buffer, encodingAlias);
}

Object.entries(categories).forEach(([categoryName, encodings]) => {
  const optGroup = document.createElement('optgroup');
  optGroup.label = categoryName;

  encodings.forEach((encoding) => {
    const encodingOption = document.createElement('option');
    encodingOption.innerHTML = encoding.name;
    optGroup.appendChild(encodingOption);
  });

  encodingSelector.appendChild(optGroup);
});


text.oninput = updateHexFromText;
hex.oninput = updateTextFromHex;
encodingSelector.onchange = updateHexFromText;

text.value = 'Text';
updateHexFromText();
