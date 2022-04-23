const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?',
];

function titleCased(arr) {
  if (arr == undefined) return [];
  else {
    return arr.map((title) => {
      return title
        .toLowerCase()
        .split(' ')
        .map((word) => {
          let newWord = '';
          switch (word) {
            case 'stoppropagation':
              newWord = 'StopPropagation';
              break;
            case 'preventdefault?':
              newWord = 'PreventDefault?';
              break;
            case 'oo':
              newWord = 'OO';
              break;
            case 'api':
              newWord = 'API';
              break;
            case 'nan':
              newWord = 'NaN';
              break;
            case 'jsonp?':
              newWord = 'JSONP?';
              break;
            default:
              newWord = word.charAt(0).toUpperCase() + word.slice(1);
              break;
          }
          return newWord;
        })
        .join(' ');
    });
  }
}
console.log('original');
console.log(tutorials);
console.log('modified');

let modifiedArray = titleCased(tutorials);
console.log(modifiedArray);
