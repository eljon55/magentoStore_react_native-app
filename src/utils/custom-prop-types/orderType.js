import {any, arrayOf, number, shape, string} from 'prop-types';

const billingAddressType = shape({
  address_type: string,
  city: string,
  country_id: string,
  email: string,
  entity_id: number,
  firstname: string,
  lastname: string,
  parent_id: number,
  postcode: string,
  region: string,
  region_code: string,
  region_id: number,
  street: arrayOf(string),
  telephone: string,
});

const itemType = shape({
  amount_refunded: number,
  applied_rule_ids: string,
  base_amount_refunded: number,
  base_discount_amount: number,
  base_discount_invoiced: number,
  base_discount_tax_compensation_amount: number,
  base_original_price: number,
  base_price: number,
  base_price_incl_tax: number,
  base_row_invoiced: number,
  base_row_total: number,
  base_row_total_incl_tax: number,
  base_tax_amount: number,
  base_tax_invoiced: number,
  created_at: string,
  discount_amount: number,
  discount_invoiced: number,
  discount_percent: number,
  discount_tax_compensation_amount: number,
  free_shipping: number,
  is_qty_decimal: number,
  is_virtual: number,
  item_id: number,
  name: string,
  no_discount: number,
  order_id: number,
  original_price: number,
  price: number,
  price_incl_tax: number,
  product_id: number,
  product_type: string,
  qty_canceled: number,
  qty_invoiced: number,
  qty_ordered: number,
  qty_refunded: number,
  qty_shipped: number,
  quote_item_id: number,
  row_invoiced: number,
  row_total: number,
  row_total_incl_tax: number,
  row_weight: number,
  sku: string,
  store_id: number,
  tax_amount: number,
  tax_invoiced: number,
  tax_percent: number,
  updated_at: string,
});

const orderType = shape({
  applied_rule_ids: string,
  base_currency_code: string,
  base_discount_amount: number,
  base_discount_tax_compensation_amount: number,
  base_grand_total: number,
  base_shipping_amount: number,
  base_shipping_discount_amount: number,
  base_shipping_discount_tax_compensation_amnt: number,
  base_shipping_incl_tax: number,
  base_shipping_tax_amount: number,
  base_subtotal: number,
  base_subtotal_incl_tax: number,
  base_tax_amount: number,
  base_to_global_rate: number,
  base_to_order_rate: number,
  base_total_due: number,
  billing_address: billingAddressType,
  billing_address_id: number,
  created_at: string,
  customer_email: string,
  customer_firstname: string,
  customer_group_id: number,
  customer_id: number,
  customer_is_guest: number,
  customer_lastname: string,
  customer_note_notify: number,
  discount_amount: number,
  discount_tax_compensation_amount: number,
  entity_id: number,
  extension_attributes: shape({
    shipping_assignments: arrayOf(shape({
      items: arrayOf(itemType),
      shipping: shape({
        address: billingAddressType,
        method: string,
        total: shape({
          base_shipping_amount: number,
          base_shipping_discount_amount: number,
          base_shipping_discount_tax_compensation_amnt: number,
          base_shipping_incl_tax: number,
          base_shipping_tax_amount: number,
          shipping_amount: number,
          shipping_discount_amount: number,
          shipping_discount_tax_compensation_amount: number,
          shipping_incl_tax: number,
          shipping_tax_amount: number,
        }),
      }),
    })),
  }),
  global_currency_code: string,
  grand_total: number,
  increment_id: string,
  is_virtual: number,
  items: arrayOf(itemType),
  order_currency_code: string,
  payment: shape({
    account_status: any,
    additional_information: arrayOf(string),
    amount_ordered: number,
    base_amount_ordered: number,
    base_shipping_amount: number,
    cc_last4: any,
    entity_id: number,
    method: string,
    parent_id: number,
    shipping_amount: number,
  }),
  protect_code: string,
  quote_id: number,
  shipping_amount: number,
  shipping_description: string,
  shipping_discount_amount: number,
  shipping_discount_tax_compensation_amount: number,
  shipping_incl_tax: number,
  shipping_tax_amount: number,
  state: string,
  status: string,
  status_histories: arrayOf(any),
  store_currency_code: string,
  store_id: number,
  store_name: string,
  store_to_base_rate: number,
  store_to_order_rate: number,
  subtotal: number,
  subtotal_incl_tax: number,
  tax_amount: number,
  total_due: number,
  total_item_count: number,
  total_qty_ordered: number,
  updated_at: string,
  weight: number,
});

export default orderType;
