const getRandomInt = require('./getRandomInt');

const getRandomStats = (originalStats) => {
  const stats = {};
  for (const [key, value] of Object.entries(originalStats)) {
    let stat = 100 / 7 * (value-1);
    stat +=  getRandomInt(1, 13);
    if (stat < 10) stat = 10;
    stats[key] = Number(stat.toFixed(0));
  }
  return stats;
}

module.exports = getRandomStats;
 