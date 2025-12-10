let count = 0;

const cc = (card) => {
  switch(card) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
    break;
    case 7:
    case 8:
    case 9:
      count;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    default:
      break;
  };

  if(count > 0) return count + ' Bet';
  if(count <= 0) return count + ' Hold';
};

console.log(cc(2));
console.log(cc(3));
console.log(cc(4));
console.log(cc(5));
console.log(cc(6));
console.log(cc(7));
console.log(cc(8));
console.log(cc(10));
console.log(cc('J'));
console.log(cc('Q'));
console.log(cc('K'));
console.log(cc('A'));
