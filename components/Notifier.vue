<template>
    <v-alert text v-bind="binding" v-if="message">
        {{ message.message }}
    </v-alert>
</template>

<script>
export default {
    props: ['message'],
    computed: {
        binding() {
            return {
                type: this.message.type,
            }
        },
    },
}
</script>

<style></style>
