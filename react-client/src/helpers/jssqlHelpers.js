/* eslint-disable object-shorthand */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
module.exports = {
  /**
   * @param {string} date incoming sql formated date to convert to JS date
   */
  convertSqlDateToJS: function (date) {
    const clean = date.substring(0, date.length - 1).replace('T', ' ');
    // Split timestamp into [ Y, M, D, h, m, s ]
    const t = clean.split(/[- :]/);
    // Apply each element to the Date function
    const d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
    return d;
  },
  /**
   * @param {Date} date incoming js date to convert to sql date/timestamp
   */
  convertJSDateToSQL: function (date) {
    return new Date(Number(date)).toISOString().slice(0, 19).replace('T', ' ');
  },
};
