<template>
    <v-app>
        <v-app-bar app dark color="primary">
            <v-app-bar-nav-icon @click="open = !open"></v-app-bar-nav-icon>
            <v-app-bar-title>Записи</v-app-bar-title>
        </v-app-bar>
        <v-navigation-drawer app v-model="open" disable-resize-watcher>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        {{ $auth.user.username }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ $auth.user.email }}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense nav>
                <v-list-item
                    v-for="item in menu"
                    :key="item.name"
                    link
                    :to="item.to"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }} </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {
            open: true,
            menu: [
                {
                    name: 'Задачи',
                    icon: 'mdi-pencil',
                    to: '/',
                },
            ],
        }
    },
}
</script>
