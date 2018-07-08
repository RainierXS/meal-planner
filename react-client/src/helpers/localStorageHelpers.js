/* eslint-disable object-shorthand */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
module.exports = {
  /**
   * @param {string} key key to find
   */
  getKey: function (key) {
    return JSON.parse(localStorage.getItem(key));
  },

  /**
   * @param {string} key key to set
   * @param {object} object object to set to key
   */
  setKey: function (key, object) {
    const objString = JSON.stringify(object);
    localStorage.setItem(key, objString);
  },

  /**
   * @param {string} key key to clear
   */
  clearKey: function (key) {
    localStorage.removeItem(key);
  },

};
