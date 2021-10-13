
<template>
    <header>
        <div class="brand-logo">
            <nuxt-link to="/">
                <img src="~/assets/images/wine-logo.png" alt="wine-logo">
            </nuxt-link>

        </div>

        <div class="wrap-header">    
            <div class="app-links">
                <app-links></app-links>
            </div>

            <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleSidebar')">
                <img src="~/assets/images/cart.png" alt="cart-box">
                <div class="cart_count">
                    <span>5</span>
                </div>
            </div>
        </div>

    </header>
</template>

<script>

import AppLinks from '~/components/AppLinks'

export default {

    components: { AppLinks }

}
</script>

<style scoped>

    header{
        display: grid;
        grid-template: 88px / auto 1fr;
        align-items: center;
        background-color: #FFFFFF;
        border-bottom: 1px solid #c4c4c4;
    }

    .wrap-header {
        display: flex;
        justify-content: space-between;
    }

    .app-links{
        align-self: center;
    }

    .brand-logo{
        margin: 0 10px;
    }

    .brand-logo img {
        width: 100px;
        height: 30px,
    }

    .drawer-toggle {
        display: flex;
        justify-self: end;
        flex-direction: column;
        justify-content: space-around;
        width: 56px;
        padding-right: 16px;
        cursor: pointer;
    }

    .cart_count {
        display: block;
        position: absolute;
        top: 51px;
        margin-left: 37px;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 50%;
        text-align: center;
    }
    .cart_count span {
        display: block;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        line-height: 20px;
        font-size: 12px;
        color: #5CB79F;
        
        -webkit-transform: translateY(1px);
        -moz-transform: translateY(1px);
        -ms-transform: translateY(1px);
        -o-transform: translateY(1px);
        transform: translateY(1px);
    }

    @media (max-width: 1199px) {
        header{
            padding: 0 16px;
        }
    }

    @media (min-width: 1200px) {
        header{
            padding: 0 280px;
        }

    }

    @media (max-width: 767px) {
        header:nth-child{
            justify-self: end !important;
        }
        .wrap-header{
            justify-self: end !important;
        }
        .app-links {
            display: none;
        }
    }

    @media (min-width: 768px) {
        .app-links {
            display: block;
        }
    }

</style>