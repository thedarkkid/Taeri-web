<template>
    <div>
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon ></v-app-bar-nav-icon>
            <v-toolbar-title>Taeri</v-toolbar-title>

            <v-spacer></v-spacer>
                <v-btn depressed :color="nav_bg" class="link-btn" v-for="item in menuItems" :key="item.title" :to="item.path" :v-test="item.test_id">
                    <span> {{ item.title }}</span>
                </v-btn>
            <v-spacer></v-spacer>

            <v-btn flat>
                <span>Sign Out</span>
                <v-icon right>mdi-logout-variant</v-icon>
            </v-btn>

        </v-app-bar>
    </div>
</template>

<script>
    import Test from '@/directives/test';

    export default {
        name: "Header",
        directives: { Test },
        data(){
            return{
                nav_bg: "#484D6D",
                menuItems:[
                    { title: 'Home', path: '/home', test_id: 'nav-to-home'},
                    { title: 'About', path: '/about', test_id: 'nav-to-about'},
                    { title: 'Contact', path: '/contact', test_id: 'nav-to-contact'},
                    { title: 'Settings', path: '/settings', test_id: 'nav-to-settings'},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .link-btn{
        margin: 0 5px;
    }
</style>