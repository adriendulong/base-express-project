/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: 0 */
import { expect } from 'chai';
import rp from 'request-promise';
import app from '../lib/app';
require('dotenv').config();

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', function () {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});

describe('Server', () => {
  let server;

  beforeEach(function (done) {
    server = app.listen(3000, function () {
      console.log('listened');
      done();
    });
  });

  describe('Get Validation', () => {
    it('should get code 200', function (done) {
      const requestUrl = 'http://127.0.0.1:3000';

      rp(requestUrl).then(() => {
        done();
      }).catch(err => done(err));
    });
  });

  afterEach(function () {
    server.close();
  });
});
