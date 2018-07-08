/* eslint-disable object-shorthand */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
module.exports = {
  /**
   * @param {number} error status
   */
  getDefaultMessage: function (key) {
    switch (key) {
      case 401:
        return 'Invalid session. Please login again.';
      case 417:
        return 'Invalid response from server.  If this error persists contact the system administator.';
      case 500:
      default:
        return 'Internal Error. Please try again later.  If this error persists contact the system administrator.';
    }
  },
};
