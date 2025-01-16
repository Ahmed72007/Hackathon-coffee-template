// Product Schema
export default {
  name: 'product',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'stock', type: 'number', title: 'Stock Level' },
    { name: 'description', type: 'text', title: 'Description' },
    { 
      name: 'category', 
      type: 'reference', 
      title: 'Category', 
      to: [{ type: 'category' }] 
    },
    { 
      name: 'image', 
      type: 'image', 
      title: 'Product Image', 
      options: { hotspot: true } 
    },
    { 
      name: 'tags', 
      type: 'array', 
      title: 'Tags', 
      of: [{ type: 'string' }] 
    }
  ]
};

// Category Schema
export const category = {
  name: 'category',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Category Name' },
    { name: 'description', type: 'text', title: 'Description' },
    { 
      name: 'image', 
      type: 'image', 
      title: 'Category Image', 
      options: { hotspot: true } 
    }
  ]
};

// Customer Schema
export const customer = {
  name: 'customer',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Customer Name' },
    { name: 'email', type: 'string', title: 'Email Address' },
    { name: 'phone', type: 'string', title: 'Phone Number' },
    { name: 'address', type: 'text', title: 'Address' },
    { 
      name: 'orders', 
      type: 'array', 
      title: 'Orders', 
      of: [{ type: 'reference', to: [{ type: 'order' }] }] 
    }
  ]
};

// Order Schema
export const order = {
  name: 'order',
  type: 'document',
  fields: [
    { 
      name: 'customer', 
      type: 'reference', 
      title: 'Customer', 
      to: [{ type: 'customer' }] 
    },
    { 
      name: 'items', 
      type: 'array', 
      title: 'Order Items', 
      of: [{
        type: 'object',
        fields: [
          { name: 'product', type: 'reference', title: 'Product', to: [{ type: 'product' }] },
          { name: 'quantity', type: 'number', title: 'Quantity' }
        ]
      }] 
    },
    { name: 'total', type: 'number', title: 'Total Amount' },
    { name: 'status', type: 'string', title: 'Order Status', options: { list: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'] } },
    { name: 'createdAt', type: 'datetime', title: 'Order Date' }
  ]
};

// Shipment Schema
export const shipment = {
  name: 'shipment',
  type: 'document',
  fields: [
    { 
      name: 'order', 
      type: 'reference', 
      title: 'Order', 
      to: [{ type: 'order' }] 
    },
    { name: 'trackingNumber', type: 'string', title: 'Tracking Number' },
    { name: 'carrier', type: 'string', title: 'Carrier Name' },
    { name: 'status', type: 'string', title: 'Shipment Status', options: { list: ['In Transit', 'Out for Delivery', 'Delivered', 'Failed'] } },
    { name: 'estimatedDelivery', type: 'datetime', title: 'Estimated Delivery Date' }
  ]
};
