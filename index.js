module.exports = convert = (num) => {
  if (typeof num !== "number") throw new TypeError("feed numsToEng a NUMBER!");
  const obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };
  let str = num.toString();
  let len = str.length;
  let first = obj[str[0]];
  let thou = ' thousand ';
  let mill = ' million ';
  let bill = ' billion ';

  const hundred = (str, obj) => {
    if (str[0] === '0' && str[1] === '0') {
      return obj[str[2]]
    } else if (str[0] === '0' && str[1] !== 0) {

      return tens(str.slice(1), obj)
    }
    let hundo = obj[str[0]] + ' hundred ';
    let ten = obj[str.slice(1)] + ' ';
    let single = obj[str[2]]
    if (obj[str.slice(1)]) {
      return hundo + ten
    } else {
      ten = obj[str[1] + '0'] + ' ';
      return hundo + ten + single;
    }
  }

  const tens = (str, obj) => {
    if (obj[str]) {
      return obj[str];
    } else {
      return obj[str[0] + '0'] + ' ' + obj[str[1]];
    }
  }

  if (obj[num]) {
    return obj[num];
  } else if (len === 2) {
    return tens(str, obj);
  } else if (len === 3) {
    return hundred(str, obj);
  } else if (len === 4) {
    return first + thou + hundred(str.slice(1), obj);
  } else if (len === 5) {
    return tens(str.slice(0,2), obj) + thou + hundred(str.slice(2), obj);
  } else if (len === 6) {
    return hundred(str.slice(0,3), obj) + thou + hundred(str.slice(3), obj);
  } else if (len === 7) {
    return first + mill + hundred(str.slice(1,4), obj) + thou + hundred(str.slice(4,7), obj);
  } else if (len === 8) {
    return tens(str.slice(0,2), obj) + mill + hundred(str.slice(2,5), obj) + thou + hundred(str.slice(5,8), obj);
  } else if (len === 9) {
    return hundred(str.slice(0, 3), obj) + mill + hundred(str.slice(3, 6), obj) + thou + hundred(str.slice(6,9), obj);
  } else if (len === 10) {
    return first + bill + hundred(str.slice(1, 4), obj) + mill + hundred(str.slice(4, 7), obj) + thou + hundred(str.slice(7,10), obj);
  } else if (len === 11) {
    return tens(str.slice(0, 2), obj) + bill + hundred(str.slice(2, 5), obj) + mill + hundred(str.slice(4, 7), obj) + thou + hundred(str.slice(8,11), obj);
  }
}



