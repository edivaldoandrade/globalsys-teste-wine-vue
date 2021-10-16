let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');
let subtotal = window.localStorage.getItem('subtotal');

// State
export const state = {
  cart: cart ? JSON.parse(cart) : [],
  cartCount: cartCount ? parseInt(cartCount) : 0,
  subtotal: subtotal ? parseFloat(subtotal) : 0,
};

// Mutations
export const mutations = {
  addToCart(state:any, item:any) {
    let found = state.cart.find((product: { name: any; }) => product.name == item.name);

    if (found) {
      found.quantity++;
    } else {
      item.quantity = 1;
      state.cart.push(item);
    }

    state.cartCount++;
    state.subtotal += item.priceStock;
  },
  subFromCart(state: { cart: any[]; cartCount: number; subtotal: number; }, item: { priceStock: number; }) {
    let index = state.cart.indexOf(item);

    if (index > -1) {
      let product = state.cart[index];

      if (product.quantity > 1) product.quantity--;
      else state.cart.splice(index, 1);

      state.cartCount--;
      state.subtotal -= item.priceStock;
    }
  },
  removeFromCart(state: { cart: any[]; cartCount: number; subtotal: number; }, item: any) {
    let index = state.cart.indexOf(item);

    if (index > -1) {
      let product = state.cart[index];
      state.cartCount -= product.quantity;
      state.subtotal -= product.priceStock * product.quantity;

      state.cart.splice(index, 1);
    }
  },
  saveCart(state: { cart: any; cartCount: string; subtotal: string; }) {
    window.localStorage.setItem("cart", JSON.stringify(state.cart));
    window.localStorage.setItem("cartCount", state.cartCount);
    window.localStorage.setItem("subtotal", state.subtotal);
  }
};

// Actions
export const actions = {};

// Getters
export const getters = {
  cart(state: { cart: any; }) {
    return state.cart;
  },
  cartAmount(state: { cartCount: any; }) {
    return state.cartCount;
  },
  cartSubtotal(state: { subtotal: any; }) {
    return state.subtotal;
  }
};
