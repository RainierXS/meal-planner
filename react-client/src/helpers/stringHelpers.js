/* eslint-disable object-shorthand */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const sHelpers = {
  /**
   * Changes case of word to specified type (only first word recieved will be returned)
   * use changeStringCase to change sentences
   * @param {string} word word to change case of
   * @param {string} type proper (default), inverse, firstUpper, firstLower, upper, lower
   */
  changeWordCase: ((string, type = 'proper') => {
    const word = string.split(' ')[0];
    switch (type.toLowerCase()) {
      case 'upper':
        return word.toUpperCase();

      case 'lower':
        return word.toLowerCase();

      case 'firstlower':
        return word.split('').map((c, i) => (
          i === 0 ? c.toLowerCase() : c
        )).join('');

      case 'firstupper':
        return word.split('').map((c, i) => (
          i === 0 ? c.toUpperCase() : c
        )).join('');

      case 'inverse':
        return word.split('').map((c, i) => (
          i === 0 ? c.toLowerCase() : c.toUpperCase()
        )).join('');

      case 'proper':
      default:
        return word.split('').map((c, i) => (
          i === 0 ? c.toUpperCase() : c.toLowerCase()
        )).join('');
    }
  }),
  /**
   * Changes case of all words in string to specified type
   * @param {string} string string to change case of
   * @param {string} type proper (default), inverse, firstUpper, firstLower, upper, lower
   */
  changeStringCase: ((string, type = 'proper') => (
    string.split(' ').map(word => sHelpers.changeWordCase(word, type)).join(' ').trim()
  )),

  /**
   * Shortens a string to specified length
   * @param {string} string string to shorten
   * @param {number} length length to shorten string to
   * @param {boolean} addEllipse append ellipse to shortened string (adds 3 chars to total length)
   */
  shorten: ((string, length, ellipse = false) => {
    const value = string.substr(0, length).trim();
    return ellipse ? sHelpers.ellipse(value) : value;
  }),

  ellipse: (string => (
    `${string.trim()}...`
  )),

};

module.exports = sHelpers;
