jest.mock(`express`);
jest.mock(`cors`);
jest.mock(`body-parser`);

describe(`When starting a server`, () => {
  let body, cors, express;
  beforeEach(() => {
    express = require(`express`);
    cors = require(`cors`);
    body = require(`body-parser`);
  });

  it(`Then it should invoke express, body-parser and cors`, () => {
    require(`../../server`);
    expect(body.callCount).toEqual(1);
  });
});
