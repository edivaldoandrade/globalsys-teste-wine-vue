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
</style>
