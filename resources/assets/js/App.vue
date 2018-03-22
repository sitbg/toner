<template>
    <div class="container">
        <navbar></navbar>
            <div class="container-fluid">
                    <router-view></router-view>
            </div>
    </div>
</template>
<script>
    import Navbar from './components/Navbar.vue';

    export default {
        components: {
            Navbar,
        },
    };
</script>
<style>
    body {
        padding-top: 5rem;
    }
</style>