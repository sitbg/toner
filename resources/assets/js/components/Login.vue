<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <div class="alert alert-danger" v-if="error">
                            <p>There was an error, unable to sign in with those credentials.</p>
                        </div>
                        <form autocomplete="off" @submit.prevent="login" method="post">
                            <div class="form-group row">

                                <label for="email" class="col-sm-4 col-form-label text-md-right">E-mail</label>
                                <div class="col-md-6">
                                    <input type="email" id="email" class="form-control" placeholder="user@example.com"
                                           v-model="email" required>
                                </div>
                            </div>
                            <div class="form-group row">

                                <label for="password" class="col-sm-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input type="password" id="password" class="form-control" v-model="password"
                                           required>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-default">Sign in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                email: null,
                password: null,
                error: false
            }
        },

        methods: {
            login(){
                var app = this
                this.$auth.login({
                    params: {
                        email: app.email,
                        password: app.password
                    },
                    success: function () {},
                    error: function (resp) {
                        app.error = true;
                        app.errors = resp.response.data.errors;
                    },
                    rememberMe: true,
                    redirect: '/',
                    fetchUser: true,
                });
            },
        }
    }
</script>