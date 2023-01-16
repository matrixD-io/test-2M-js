const fs = require('fs').promises;

/**
 * Returns the contents of 2M.bin.
 *
 * @returns {Promise<Buffer>}
 */
module.exports = async function () {
  const data = await fs.readFile('2M.bin', 'binary');
  return Buffer.from(data);
};
