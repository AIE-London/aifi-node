'use strict';

const aifi = require('../../../testUtils').getSpyableAifi();

const expect = require('chai').expect;

describe('Customer', () => {
  describe('Contests Resource', () => {
    describe('create', () => {
      it('Sends the correct request', () => {
        aifi.customer.contests.create({
          productId: '1',
          quantity: 1,
        });
        expect(aifi.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/api/customer/v2/contests',
          headers: {},
          data: {
            productId: 'test@test.com',
            quantity: 1,
          },
          settings: {},
        });
      });
    });
  });
});
