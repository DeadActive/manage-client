<template>
    <v-card class="ma-4">
        <v-card-title> Список задач </v-card-title>
        <v-card-text>
            <v-data-table></v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            records: null,
        }
    },
    async mounted() {
        const { data } = await this.$api.records.get()
        this.records = data.data
    },
}
</script>

<style></style>
