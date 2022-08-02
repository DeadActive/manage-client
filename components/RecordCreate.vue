<template>
    <v-card class="ma-4">
        <v-card-title>Создать задачу</v-card-title>
        <v-card-text>
            <v-form @submit.prevent="createRecord">
                <v-text-field
                    type="number"
                    dense
                    label="Дизайнеры"
                    v-model="record.designers"
                    outlined
                ></v-text-field>
                <v-text-field
                    type="number"
                    dense
                    label="Проверки"
                    v-model="record.checks"
                    outlined
                ></v-text-field>
                <v-text-field
                    type="number"
                    dense
                    label="Адаптации"
                    v-model="record.adaptations"
                    outlined
                ></v-text-field>
                <notifier :message="message"></notifier>
                <v-btn type="submit" block color="primary"> Добавить </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            record: {
                designers: 0,
                checks: 0,
                adaptations: 0,
            },
            loading: false,
            message: null,
        }
    },
    methods: {
        async createRecord() {
            this.loading = true
            this.message = null

            try {
                await this.$api.records.create(this.record)

                this.message = {
                    message: 'Запись успешно добавлена',
                    type: 'success',
                }
            } catch (e) {
                this.message = { message: e.message, type: 'error' }
            } finally {
                this.loading = false
            }
        },
    },
}
</script>

<style></style>
