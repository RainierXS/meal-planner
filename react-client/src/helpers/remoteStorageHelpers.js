/* eslint-disable object-shorthand */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

const Axios = require('axios');

module.exports = {
  /**
   * @param {string} key key to find
   * @param {function} callback axios callback
   */
  getKey: function (key, callback) {
    Axios.get(`/activity/active?user=${key}&ts=${Date.now()}`) // ts added to circumvent IE's retardedness
      .then(res => callback(null, res.data[0]))
      .catch(err => callback(err, null));
  },

  /**
   * @param {string} key key to set
   * @param {object} object object to set to key
   * @param {function} callback axios callback
   */
  setKey: function (key, object, callback) {
    Axios.post(`/activity/active?user=${key}`, object)
      .then(res => callback(null, res.data))
      .catch(err => callback(err, null));
  },

  /**
   * @param {string} key key to clear
   * @param {function} callback axios callback
   */
  clearKey: function (key, callback) {
    Axios.delete(`/activity/active?user=${key}`)
      .then(res => callback(null, res.data))
      .catch(err => callback(err, null));
  },

};
