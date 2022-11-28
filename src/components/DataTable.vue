<template>
    <div class="container">
        <div class="chart">
            <h3>{{ title }}</h3>
            <EasyDataTable 
                :headers="headers" 
                :items="items" 
                rows-per-page-message="Elementos por página"
                rows-of-page-separator-message="de"
                table-class-name="data-table" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    items: Array
})

const headers = [
    { text: "Página", value: "page", sortable: true },
    { text: "URL", value: "url" },
    { text: "Usuarios", value: "users", sortable: true },
    { text: "Tiempo Promedio", value: "time", sortable: true }
]
</script>

<style scoped>
h3 {
    font-weight: 400;
    font-size: 21px;
    padding-left: 0.25rem;
    margin-bottom: 0.75rem;
}
</style>
