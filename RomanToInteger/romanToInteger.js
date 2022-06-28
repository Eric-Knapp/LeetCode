/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const def = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;

  for (i = 0; i < s.length; i++) {
    const current = def[s[i]];
    const nextOne = def[s[i + 1]];

    if (current < nextOne) {
      res += current - nextOne;
      i++;
    } else {
      res += current;
    }
  }
  return res;
};
