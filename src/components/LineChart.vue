<template>
    <div class="container">
        <div class="chart">
            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    data: Array,
    categories: Array
})

console.log(props.data)

const series = [{
    name: props.title,
    data: props.data
}]

const chartOptions = {
    chart: {
        fontFamily: 'Helvetica, Arial, sans-serif',
        height: 350,
        type: 'line',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    colors: ['#646cff'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: props.title,
        align: 'left',
        style: {
            color: '#fff',
            fontSize: '21px',
            fontWeight: 'regular'
        }
    },
    tooltip: {
       theme: 'dark'
    },
    grid: {
        borderColor: "#fff"
    },
    xaxis: {
        categories: props.categories,
        labels: {
            style: {
                colors: '#fff'
            }
        }
        
    },
    yaxis: {
        labels: {
            style: {
                colors: '#fff'
            }
        }
    }
}
</script>