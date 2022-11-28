<template>
    <Header></Header>
    <main>
        <div class="row">
            <Card 
                v-for="(card, index) in cards" 
                :key="index"
                :icon="card.icon"
                :title="card.title"
                :value="card.value">
            </Card>


        </div>

        <div class="row">
            <LineChart
                :title="chart1.title" 
                :data="chart1.data"
                :categories="chart1.categories"></LineChart>
        </div>

        <div class="row">
            <BarChart
                :title="chart2.title"
                :data="chart2.data"
                :categories="chart2.categories"></BarChart>
            <BarChart
                :title="chart3.title"
                :data="chart3.data"
                :categories="chart3.categories"></BarChart>
        </div>

        <div class="row">
            <DataTable
                title="Detalle por URL"
                :items="tableItems"></DataTable>
        </div>
    </main>
</template>

<script setup>
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import LineChart from './components/LineChart.vue'
import BarChart from './components/BarChart.vue'
import DataTable from './components/DataTable.vue'

const cards = [
    {
        title: 'Usuarios',
        value: '1500',
        icon: 'fa-regular fa-user'
    },
    {
        title: 'Sesiones',
        value: '3250',
        icon: 'fa-regular fa-star'
    },
    {
        title: 'Paginas Vistas',
        value: '5326',
        icon: 'fa-regular fa-eye'
    },
    {
        title: 'Tiempo Promedio',
        value: '02:34',
        icon: 'fa-regular fa-clock'
    }
]

const chart1 = {
    title: "Performance",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep']
}

const chart2 = {
    title: "Dispositivos",
    data: [1000, 450, 50 ],
    categories: ["Móvil", "Escritorio", "Tablet"]
}

const chart3 = {
    title: "Origen",
    data: [250, 450, 200, 600 ],
    categories: ["Organico", "Directo", "Campaña-UTM134", "Campaña-S2022"]
}

const tableItems = [
    { page: "/", url: '/', users: 874, time: "01:26" },
    { page: "/computadores", url: '/catalogo/computadores', users: 629, time: "03:35" },
    { page: "/telefonos", url: '/catalogo/telefonos', users: 458, time: "02:54" },
    { page: "/vestuario", url: '/catalogo/vestuario', users: 387, time: "05:16" },
    { page: "/carrito", url: '/carrito', users: 208, time: "00:24" },
    { page: "/checkout", url: '/checkout', users: 98, time: "01:15" },

]

</script>


<style scoped>
main {
    padding: 3rem 1rem;
    width: 100%;
    max-width: 1600px;
    margin: auto;
}
.row {
    display: flex;
    flex-wrap: wrap;
}


</style>
