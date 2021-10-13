<template>
    <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/">Clube</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/">Loja</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/">Produtores</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/">Ofertas</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/">Eventos</nuxt-link></li>
    </ul>
</template>

<style scoped>

    .nav-list {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0 20px;
    }

    .nav-item {
        margin: 0 15px;
    }

    .nav-item a {
        text-decoration: none;
        color: #666666;
    }

    .nav-item a:hover,
    .nav-item a:active{
        color: #3a3a3a;
    }

    @media (max-width: 767px) {
        .nav-list {
            /* display: block; */
            margin: 0;
        }
        .nav-item{
            margin-top: 16px;
            margin-bottom: 16px;
        }
    }

</style>