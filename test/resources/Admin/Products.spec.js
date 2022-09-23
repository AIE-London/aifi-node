'use strict';

const aifi = require('../../../testUtils').getSpyableAifi();

const expect = require('chai').expect;

describe('Admin', () => {
  describe('Product Resource', () => {
    describe('create', () => {
      it('Sends the correct request', () => {
        aifi.admin.products.create({
          name: 'string',
          price: 0,
          quantity: 0,
          weight: 0,
          barcode: 'string',
          category: 'string',
          sku: 'string',
          thumbnail: 'string',
          invalidThumbnail: true,
          inventoryItemId: 0,
          externalId: 'string',
          restricted: false,
          storePrices: [
            {
              price: 28.04,
              storeId: 2,
            },
          ],
          variants: [
            {
              isDefault: false,
              name: 'Fanta',
              weight: 1.25,
              barcodes: [
                {
                  barcode: '1234567890128',
                  isDefault: true,
                },
              ],
              thumbnail:
                'https://cdn.shopify.com/s/files/1/0226/5799/0730/products/xxFantaOrange_128x.jpg?v=1558963318',
              invalidThumbnail: true,
            },
          ],
        });

        expect(aifi.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/api/admin/v2/products',
          headers: {},
          data: {
            name: 'string',
            price: 0,
            quantity: 0,
            weight: 0,
            barcode: 'string',
            category: 'string',
            sku: 'string',
            thumbnail: 'string',
            invalidThumbnail: true,
            inventoryItemId: 0,
            externalId: 'string',
            restricted: false,
            storePrices: [
              {
                price: 28.04,
                storeId: 2,
              },
            ],
            variants: [
              {
                isDefault: false,
                name: 'Fanta',
                weight: 1.25,
                barcodes: [
                  {
                    barcode: '1234567890128',
                    isDefault: true,
                  },
                ],
                thumbnail:
                  'https://cdn.shopify.com/s/files/1/0226/5799/0730/products/xxFantaOrange_128x.jpg?v=1558963318',
                invalidThumbnail: true,
              },
            ],
          },
          settings: {},
        });
      });
    });

    describe('retrieve', () => {
      it('Sends the correct request', () => {
        aifi.admin.products.retrieve('1');
        expect(aifi.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/api/admin/v2/products/1',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        aifi.admin.products.list({externalId: 25});
        expect(aifi.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/api/admin/v2/products?externalId=25',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('update', () => {
      it('Sends the correct request', () => {
        aifi.admin.products.update('1', {
          name: 'string',
          price: 0,
          quantity: 0,
          weight: 0,
          barcode: 'string',
          category: 'string',
          sku: 'string',
          thumbnail: 'string',
          invalidThumbnail: true,
          inventoryItemId: 0,
          restricted: false,
          storePrices: [
            {
              price: 28.04,
              storeId: 2,
            },
          ],
        });
        expect(aifi.LAST_REQUEST).to.deep.equal({
          method: 'PUT',
          url: '/api/admin/v2/products/1',
          headers: {},
          data: {
            name: 'string',
            price: 0,
            quantity: 0,
            weight: 0,
            barcode: 'string',
            category: 'string',
            sku: 'string',
            thumbnail: 'string',
            invalidThumbnail: true,
            inventoryItemId: 0,
            restricted: false,
            storePrices: [
              {
                price: 28.04,
                storeId: 2,
              },
            ],
          },
          settings: {},
        });
      });
    });

    describe('retryCheckout', () => {
      it('Sends the correct request', () => {
        aifi.admin.orders.retryCheckout('1');
        expect(aifi.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/api/admin/v2/orders/1/retry',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
