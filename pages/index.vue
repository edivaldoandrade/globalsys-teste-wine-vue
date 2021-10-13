<template>
  <div class="content">

    <div class="banner-box">
      <img class="img-full" src="~/assets/images/banner-full.png" alt="banner">
      <img class="img-responsive" src="~/assets/images/banner-responsive.png" alt="banner">
    </div>

    <div class="product-area">
      <div class="prd" v-for="(product, index) in products" :key="index">
          <article class="product-card">

            <img class="product-image" :src="product.image" />
            
            <div class="article-details f-1">
              <h4 class="product-title">{{ product.name }}</h4>
              <div v-if="product.available"  class="product-price">

                <p class="product-author">{{ product.priceStock | toCurrency }}</p>

                <div class="member">
                  <p>Sócio Wine</p>
                  <p class="price"><span>{{ product.priceMember | toCurrency }}</span></p>
                </div>

                <!-- <p class="product-description">{{ product.pricePromotional | toCurrency }}</p> -->
              </div>

              <div>
                <button v-if="product.available" class="btn btn-add f-1">Adicionar</button>
                <button v-else class="btn btn-non-available f-1">Esgotado</button>
              </div>

            </div>
          </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
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
  }
})
</script>

<style scoped>
  .content {
    margin-top: 62px;
  }

  .img-full, 
  .img-responsive {
    width: 100%;
  }

  .img-full {
    display: block;
  }

  .img-responsive {
    display:none;
  }

  @media (max-width: 767px){
    .img-full{
      display:none;
    }

    .img-responsive{
      display:block;
    }
  }


  /*  */
  .product-area {
    margin: 38px -15px 30px -15px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .prd {
    position: relative;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  @media (min-width: 992px){
    .prd{
      -ms-flex: 0 0 33.33%;
      flex: 0 0 33.33%;
      max-width: 33.33%;    
    }
  }

  .product-card {
    display: flex;
    flex-direction: row;
    background: #fff;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    border-radius: 0.375rem;
    overflow: hidden;
    padding: 8px;
    
    max-height: 210px;
  }

  .product-image {
    display: block;
    /* width: 100%; */
    object-fit: cover;
    align-self: center;
    max-height: 176px;
  }

  .f-1{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
  }

  .product-title {
    font-size: 14px;
    line-height: 16px;

    display: flex;
    align-items: center;
    letter-spacing: -0.2px;

    color: #1D1D1B;
  }

  .member {
    font-size: 10px;
    line-height: 10px;
    text-transform: uppercase;
    color: #1D1D1B;
  }

  .member .price {
    margin-top: 0;
    font-size: 12px;

    display: flex;
    align-items: center;

    color: #B6116E;
  }

  .member .price span{
    font-size: 14px;
  }

  .product-author {
    font-size: 12px;
    line-height: 16px;
    text-decoration-line: line-through;
    color: #888888;
    margin: 0;
  }

  .member p:first-child {
    margin-bottom: 4px;
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
  }

  .btn-add {
    background: #B6116E;
  }

  .btn-non-available {
    background: #A0A0A0;
  }

  @media (max-width: 40rem) {
    .product-card {
      flex-wrap: wrap;
    }
  }

  @supports (display: grid) {
    /* body {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 0.625rem;
      grid-template-areas: ". main main ." ". main main .";
    } */
    
    #root {
      grid-area: main;
      align-self: center;
      justify-self: center;
    }

    /* .product-image {
      height: 100%;
    } */
    
    .product-card {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 1fr;
    }
    
    @media (max-width: 40rem) {
      .product-card {
        grid-template-columns: auto;
        grid-template-rows: 12rem 1fr;
      }
    }
  }

</style>
