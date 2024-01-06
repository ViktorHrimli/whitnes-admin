import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsItemsPrice extends Schema.Component {
  collectionName: 'components_elements_items_prices';
  info: {
    displayName: 'Items Price';
  };
  attributes: {
    item: Attribute.String;
    price: Attribute.BigInteger;
  };
}

export interface ElementsItemsSelects extends Schema.Component {
  collectionName: 'components_elements_items_selects';
  info: {
    displayName: 'Items Selects';
  };
  attributes: {
    item: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.items-price': ElementsItemsPrice;
      'elements.items-selects': ElementsItemsSelects;
    }
  }
}
