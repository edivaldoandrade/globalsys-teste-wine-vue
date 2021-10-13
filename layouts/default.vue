<template>
    <div class="app-container">

        <TheHeader/>

        <TheSideNav/>

        <div class="app-content">
            <nuxt />
        </div>

    </div>
</template>

<script>

    import TheHeader from '~/components/TheHeader'
    import TheSideNav from '~/components/TheSideNav'

    export default {

        components: {
            TheHeader,
            TheSideNav,
        },

        computed: {

            isSidebar() {
                return this.$store.getters['nav/toggleSidebar']
            }

        },

        watch: {
            '$route': function() {
                if (process.client && this.isSidebar && window.innerWidth < 768) {
                    this.$store.dispatch('nav/toggleSidebar')
                }
            },
        }

    }

</script>

<style>
    html, body{
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Lato;
    }
    .app-container{
        height: 100%;
        position: relative;
        display: grid;
        grid-template: auto 1fr auto / 1fr;
    }
    .app-content{
        min-height: calc(100vh - 89px);
        /* padding: 24px; */
        padding: 0 280px;
        display: grid;
        /* align-items: center; */
        justify-items: center;
        background-color: #F5F5F5;
    }

    @media (max-width: 1199px) {
        .app-content{
            padding: 0 16px;
        }
    }
</style>
