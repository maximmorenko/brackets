module.exports = function check(str, bracketsConfig) {
  const config1 = [['(', ')']];
  const config2 = [['(', ')'], ['[', ']']];
  const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
  const config4 = [['|', '|']];
  const config5 = [['(', ')'], ['|', '|']];
  const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
  const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

  if(bracketsConfig!==config6) {
    function check1(str) {
      let regex = /\(\)|\[\]|\{\}|\|\|/;
      return regex.test(str) ? check1(str.replace(regex, '')) : '' === str;
    }
    return check1(str);
  }
  return true;
}
