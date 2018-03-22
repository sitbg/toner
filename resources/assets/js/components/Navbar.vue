<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link :to="{ name: 'home' }" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav navbar-nav ml-auto">
                <li v-if="!$auth.check()" class="nav-item">
                    <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
                </li>
                <div class="btn-group" v-if="$auth.check()">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ $auth.user().name }}
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item" type="button" @click.prevent="$auth.logout({redirect:'/login'})">Logout</button>
                        <button class="dropdown-item" type="button">Profile</button>
                        <li v-if="$auth.user().id==1" class="nav-item">
                            <router-link :to="{ name: 'register' }" class="dropdown-item">Register</router-link>
                        </li>
                    </div>
                </div>

            </ul>
        </div>
    </nav>
</template>

