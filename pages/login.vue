<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-card>
                <v-card-title>Войти</v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="login">
                        <v-text-field
                            type="email"
                            dense
                            outlined
                            v-model="creds.identifier"
                        ></v-text-field>
                        <v-text-field
                            type="password"
                            dense
                            outlined
                            v-model="creds.password"
                        ></v-text-field>
                        <div v-if="error" class="error--text">
                            {{ error }}
                        </div>
                        <v-btn
                            type="submit"
                            color="primary"
                            block
                            :loading="loading"
                            >Войти</v-btn
                        >
                    </v-form>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    auth: false,
    layout: 'LoginLayout',
    data() {
        return {
            creds: {
                identifier: '',
                password: '',
            },
            loading: false,
            error: null,
        }
    },
    methods: {
        async login() {
            this.error = null
            this.loading = true

            try {
                await this.$auth.loginWith('local', {
                    data: this.creds,
                })

                this.$router.push('/')
            } catch (e) {
                this.error = e.message
            } finally {
                this.loading = false
            }
        },
    },
}
</script>

<style></style>
