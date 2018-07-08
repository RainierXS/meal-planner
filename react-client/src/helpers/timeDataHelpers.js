/* eslint-disable object-shorthand */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
module.exports = {
  /**
   * @param {array} ts timestamps to reduce
   */
  calcTimeData: function (ts) {
    const timeData = ts.reduce(function (acc, cur) {
      switch (cur.action) {
        case 'start':
          acc.startTime = cur.time;
          acc.runtime = 0;
          acc.pauseTime = 0;
          acc.lastAction = cur.action;
          acc.lastTime = cur.time;
          break;
        case 'pause':
        // case 'timedout-pause': // timedout needs to account lastaction being same type
          acc.lastAction = cur.action;
          acc.runtime += cur.time - acc.lastTime;
          acc.lastTime = cur.time;
          break;
        case 'resume':
        // case 'timedout-resume': // timedout needs to account lastaction being same type
          acc.lastAction = cur.action;
          acc.pauseTime += cur.time - acc.lastTime;
          acc.lastTime = cur.time;
          break;
        case 'submit':
          if (acc.lastAction === 'pause') {
            acc.pauseTime += cur.time - acc.lastTime;
            acc.lastTime = cur.time;
          } else if (
            acc.lastAction === 'resume' ||
            acc.lastAction === 'start'
          ) {
            acc.runtime += cur.time - acc.lastTime;
            acc.lastTime = cur.time;
          }
          acc.lastAction = cur.action;
          acc.endTime = cur.time;
          break;
        default:
          break;
      }
      return acc;
    }, {});
    return timeData;
  },
};
