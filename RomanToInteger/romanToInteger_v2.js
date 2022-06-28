var romanToInt = function (s) {
  let number = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      i + 1 < s.length &&
      s.charAt(i) === "I" &&
      (s.charAt(i + 1) === "V" || s.charAt(i + 1) === "X")
    )
      number--;
    else if (
      i + 1 < s.length &&
      s.charAt(i) === "X" &&
      (s.charAt(i + 1) === "L" || s.charAt(i + 1) === "C")
    )
      number -= 10;
    else if (
      i + 1 < s.length &&
      s.charAt(i) === "C" &&
      (s.charAt(i + 1) === "D" || s.charAt(i + 1) === "M")
    )
      number -= 100;
    else if (s.charAt(i) === "I") number++;
    else if (s.charAt(i) === "V") number += 5;
    else if (s.charAt(i) === "X") number += 10;
    else if (s.charAt(i) === "L") number += 50;
    else if (s.charAt(i) === "C") number += 100;
    else if (s.charAt(i) === "D") number += 500;
    else if (s.charAt(i) === "M") number += 1000;
  }

  return number;
};
