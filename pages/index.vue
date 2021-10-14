<template>
  <div class="content">

    <div class="banner-box">
      <img class="banner-full" src="~/assets/images/banner-full.png" alt="banner">
      <img class="banner-responsive" src="~/assets/images/banner-responsive.png" alt="banner">
    </div>

    <div class="product-area">
      <div class="prd" v-for="(product, index) in products" :key="index">
          <article class="product-card">

            <img class="product-image" :src="product.image" />
            
            <div class="article-details">
              <div><h4 class="product-title">{{ product.name }}</h4>
              <div v-if="product.available"  class="product-price">

                <p class="product-author">{{ product.priceStock | toCurrency }}</p>

                <div class="member">
                  <div>
                    <p>Sócio</p>
                    <p>Wine</p>
                  </div>
                  <p class="price"><span>{{ product.priceMember | toCurrency }}</span></p>
                </div>
                
                <p class="price-responsive"> Não sócio {{ product.priceStock | toCurrency }}</p>

              </div>
              </div>
              

              <div>
                <button v-if="product.available" class="btn btn-add f-1" @click="addToCart(index, 1)">Adicionar</button>
                <button v-else class="btn btn-non-available f-1">Esgotado</button>
              </div>

            </div>
          </article>
          <div>
            <button v-if="product.available" class="btn btn-add-responsive f-1" @click="addToCart(index, 1)">Adicionar</button>
            <button v-else class="btn btn-non-available-responsive f-1">Esgotado</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {

    methods: {
      addToCart(item) {
        this.$store.commit('addToCart', item);
      }
    },
    async asyncData({ $http }) {
      const products = await $http.$get('https://run.mocky.io/v3/908ec5b5-1e5a-4602-9008-47719f7c6759')

      return { products }
    }
  }
</script>

<style scoped>
  


  /*  */
  .product-area {
    margin: 38px -10px 30px -10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  
  @media (max-width: 991px){
    .product-area {
      display: flex;
      flex-wrap: unset;
    }
  }

  .prd {
    position: relative;
    /* width: 100%; */
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
    padding: 8px;
    
    max-height: 210px;
  }

  .product-image {
    display: block;
    object-fit: cover;
    align-self: center;
    max-height: 176px;
  }

  .article-details{
    font-style: normal;
    font-weight: bold;
    
    display: grid;
    align-content: space-between;
  }

  .product-title {
    font-size: 14px;
    line-height: 16px;

    display: flex;
    align-items: center;
    letter-spacing: -0.2px;
    margin: 0 0 15px 0;

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

  .price-responsive {
    display: none;
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
    
    cursor: pointer;
  }

  .btn-add,
  .btn-add-responsive
  {
    background: #B6116E;
  }

  .btn-non-available,
  .btn-non-available-responsive
  {
    background: #A0A0A0;
  }

  .btn-add-responsive,
  .btn-non-available-responsive
   {
    display: none;
    margin-top: 10px;
  }

  @supports (display: grid) {
    
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
    
    @media (max-width: 767px) {
      .banner-full{
        display:none;
      }

      .banner-responsive{
        display:block;
      }
      .product-area {
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        width: 465px;
        height: auto;
        -ms-flex-wrap: unset;
        flex-wrap: unset;
        margin: 38px -10px 30px -10px;
      }

      .product-area::-webkit-scrollbar {
        display: none;
      }
      .product-card {
        grid-template-rows: 12rem 1fr;
        flex-wrap: wrap;
        display: inline-table;
        width: 244px;    
        min-height: 340px;
        
        text-align: center;
        text-align: -webkit-center;
      }

      .product-title {
        font-size: 16px;
        display: block;
      }

      .article-details {
        text-align: center;
      }
      
      .btn-add-responsive,
      .btn-non-available-responsive
      {
        display: block;
      }

      .price-responsive{
        display: block;
      }

      .member {
        width: 100%;
        display: inline-flex;
        place-content: center;
      }

      .member .price{
        display: flex;
        place-self: end;
      }

      .btn-add, 
      .btn-non-available 
      {
        display: none;
      }
      .product-card {
        max-height: auto;
      }

      .product-image {
        display: block;
        object-fit: cover;
        align-self: center;
      }
    }
  }

</style>
