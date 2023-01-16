const load2M = require('./index.js');

describe('load2M', () => {
  it('resolves to a Buffer', async () => {
    const result = await load2M();
    expect(result).toBeInstanceOf(Buffer);
  });
});
