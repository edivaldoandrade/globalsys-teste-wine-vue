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
                    content
                </div>
                <div class="sidenav-footer">
                    <div class="subtotal">
                        <span class="subtotal-text">subtotal</span>
                        <span class="price">{{ 55.4 | toCurrency }}</span>
                    </div>
                    <button class="btn btn-order">Finalizar pedido</button>
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
        background-color: #d6d6d6;
        z-index: 10000;
        position: fixed;
        top: 0;
        right: 0;
        box-sizing: border-box;
        /* padding: 30px; */
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

    .sidenav-footer {
        box-shadow: 0px -2px 5px rgb(0 0 0 / 5%);
        bottom: 0px;
        /* position: absolute; */
        /* width: inherit; */
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

</style>
