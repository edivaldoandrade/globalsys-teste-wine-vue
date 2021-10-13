<template>
    <div class="sidenav-container">

        <div v-if="isSidebar" class="backdrop" @click="hideSidebar"></div>

        <transition name="slide-side">
            <div v-if="isSidebar" class="sidenav">
                <div class="sidenav-header">
                    <span @click="hideSidebar">&#128473;</span>
                    <span>WineBox (5)</span>
                </div>
                <!-- <app-links></app-links> -->
                <div class="sidenav-content">
                    <div class="over-y">
                        <div class="product" v-for="(product, index) in products" :key="index">
                            <div class="product-item">

                                <img class="product-image" :src="product.image" />
                                
                                <div class="prod">
                                    <div class="product-info">
                                        <h5 class="product-title">{{ product.name }}</h5>
                                        <div>
                                            <div class="product-quantity">
                                                <span>1</span>
                                                <div class="qty_sub qty_button">
                                                    <span>-</span>
                                                </div>
                                                <div class="qty_add qty_button">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="product-price">
                                        <div class="remove-product">&#128473;</div>
                                        <p class="price"><span>{{ product.priceMember | toCurrency }}</span></p>
                                    </div>
                                </div>
                            </div>
                            <hr v-if="index !=Object.keys(products).length - 1" />
                        </div>
                    </div>

                    <div class="sidenav-footer">
                        <div class="subtotal">
                            <span class="subtotal-text">subtotal</span>
                            <span class="price">{{ 55.4 | toCurrency }}</span>
                        </div>
                        <button class="btn btn-order">Finalizar pedido</button>
                    </div>
                </div>
            </div>
        </transition>


    </div>
</template>

<script lang="ts">

    import Vue from 'vue'

    // import AppLinks from '~/components/AppLinks'

    export default Vue.extend({

        // components: { AppLinks },

        data() {
            return {
            products: [
                {
                "available": true,
                "image": "https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=176/assets-images/produtos/23315-01.png",
                "name": "Partridge Flying Malbec 2019",
                "priceMember": 34.9,
                "pricePromotional": 41.06,
                "priceStock": 59.9
                },
                {
                "available": true,
                "image": "https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=176/assets-images/produtos/19728-01.png",
                "name": "Oxford Landing Cabernet Shiraz 2016",
                "priceMember": 47.9,
                "pricePromotional": 56.35,
                "priceStock": 120.9
                },
                {
                "available": false,
                "image": "https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=176/assets-images/produtos/23386-01.png",
                "name": "Pedro Teixeira Tinto",
                "priceMember": 31.9,
                "pricePromotional": 37.53,
                "priceStock": 52.9
                }
            ]
            }
        },

        methods: {
            hideSidebar() {
                this.$store.dispatch('nav/toggleSidebar')
            }
        },

        computed: {

            isSidebar() {
                return this.$store.getters['nav/toggleSidebar']
            }

        }

    })

</script>


<style scoped>

    .sidenav-container {
        height: 100%;
        width: 100%;
    }

    .sidenav {
        height: 100%;
        width: 300px;
        background-color: #F5F5F5;;
        z-index: 10000;
        position: fixed;
        top: 0;
        right: 0;
        box-sizing: border-box;
    }

    .sidenav-header,
    .sidenav-footer 
    {
        background-color: #fff;
        padding: 23px 15px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }

    .sidenav-header {
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }

    .sidenav-content {
        flex-grow: 1;
        align-content: space-between;
    }

    .over-y {
        overflow-y: auto;
        height: calc(100vh - 185px);
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

        color: #B6116E;
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
        color: #FFFFFF;
        
        cursor: pointer;
    }

    .btn-order {
        background: #7FBC44;
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
    

    /* ÃQUI */

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
