<template>
  <div class="sidenav-container">
    <div v-if="isSidebar" class="backdrop" @click="hideSidebar"></div>

    <transition name="slide-side">
      <div v-if="isSidebar" class="sidenav">
        <div class="sidenav-header">
          <span @click="hideSidebar">&#128473;</span>
          <span>WineBox ({{ totalItemsCart }})</span>
        </div>
        <div class="sidenav-content">
          <div class="over-y">
            <div class="product" v-for="(item, index) in products" :key="index">
              <div class="product-item">
                <img class="product-image" :src="item.image" />

                <div class="prod">
                  <div class="product-info">
                    <h5 class="product-title">{{ item.name }}</h5>
                    <div>
                      <div class="product-quantity">
                        <span>{{ item.quantity }}</span>
                        <div
                          class="qty_sub qty_button"
                          @click="subFromCart(item)"
                        >
                          <span>-</span>
                        </div>
                        <div
                          class="qty_add qty_button"
                          @click="addToCart(item)"
                        >
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="product-price">
                    <div
                      class="remove-product"
                      @click.prevent="removeFromCart(item)"
                    >
                      &#128473;
                    </div>
                    <p class="price">
                      <span>{{ item.priceStock | toCurrency }}</span>
                    </p>
                  </div>
                </div>
              </div>
              <hr v-if="index != Object.keys(products).length - 1" />
            </div>
          </div>

          <div class="sidenav-footer">
            <div class="subtotal">
              <span class="subtotal-text">subtotal</span>
              <span class="price">{{ cartSubtotal | toCurrency }}</span>
            </div>
            <button class="btn btn-order">Finalizar pedido</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default{
  computed: {
    isSidebar() {
      return this.$store.getters["nav/toggleSidebar"];
    },
    products() {
      return this.$store.getters["cart/cart"];
    },
    totalItemsCart() {
      return this.$store.getters["cart/cartAmount"];
    },
    cartSubtotal() {
      return this.$store.getters["cart/cartSubtotal"];
    },
  },

  methods: {
    hideSidebar() {
      this.$store.dispatch("nav/toggleSidebar");
    },
    addToCart(item) {
      this.$store.commit("cart/addToCart", item);
      this.$store.commit("cart/saveCart");
    },
    subFromCart(item) {
      this.$store.commit("cart/subFromCart", item);
      this.$store.commit("cart/saveCart");
    },
    removeFromCart(item) {
      this.$store.commit("cart/removeFromCart", item);
      this.$store.commit("cart/saveCart");
    },
  },
};
</script>


<style scoped>
.over-y {
  overflow-y: auto;
  height: calc(100vh - 185px);
}

.over-y::-webkit-scrollbar {
  display: none;
}

.sidenav-footer {
  box-shadow: 0px -2px 5px rgb(0 0 0 / 5%);
  bottom: 0px;
  position: absolute;
  width: -webkit-fill-available;
}

.subtotal {
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
}

.subtotal-text {
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;

  text-align: right;
  text-transform: uppercase;

  color: #666666;
}

.price {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  text-align: right;
  margin-top: 0;

  display: flex;
  align-items: center;

  color: #b6116e;
}

.sidenav-header span {
  margin: 0 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 16px;
  letter-spacing: -0.833333px;
}

.btn {
  width: 100%;
  height: 40px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 4px;

  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  cursor: pointer;
}

.btn-order {
  background: #7fbc44;
}

.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(+100%);
}

@media (max-width: 767px) {
  .sidenav {
    width: 100%;
  }
}

.product-area {
  margin: 38px -15px 30px -15px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.product {
  position: relative;
  width: 100%;
  max-height: 165px;
  padding: 10px;
  box-sizing: border-box;
}

.product-item {
  display: flex;
  flex-direction: row;
}

.product-image {
  display: block;
  object-fit: cover;
  align-self: center;
  max-height: 120px;
}

.prod {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.product-info {
  align-content: space-between;
  display: grid;
}

.product-title {
  margin: 0;
}

.product-quantity {
  position: relative;
  width: 68px;
  height: 30px;
  border: solid 2px #969696;
  border-radius: 3px;

  text-align: center;
}

.product-quantity > span {
  line-height: 28px;
  font-size: 16px;
  font-weight: 300;
  color: #4a4a4a;
  text-align: center;
}

.qty_button {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 22px;
  height: 100%;
  line-height: 28px;
  cursor: pointer;
  font-size: 16px;
  color: #414141;
}

.qty_button span {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.qty_sub {
  left: 0px;
}

.qty_add {
  right: 0px;
}

.product-price {
  align-content: space-between;
  display: grid;
  justify-items: end;
}

.product-price .price {
  margin: 0;
}

.remove-product {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 1px solid #979797;

  display: block;
  font-style: normal;
  line-height: 20px;
  font-size: 12px;
  color: #888888;
  text-align: center;

  -webkit-transform: translateY(1px);
  -moz-transform: translateY(1px);
  -ms-transform: translateY(1px);
  -o-transform: translateY(1px);
  transform: translateY(1px);

  cursor: pointer;
}

.product hr {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>