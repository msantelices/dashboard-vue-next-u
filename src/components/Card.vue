<template>
    <div class="card">
        <div class="content">
            <div class="icon">
                <i :class="icon"></i>
            </div>
            <div class="info">
                <small>{{ title }}</small>
                <h3>{{ value }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  title: String,
  value: String
})

</script>

<style scoped>
.card {
    padding: 1rem;
    width: 100%;
}
.content {
    width: 100%;
    padding: 1.5rem;
    border-radius: 3px;
    background: var(--dark);
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icon i,
.info h3 {
    font-size: 2rem;
    text-align: right;
}

.info small {
    font-size: 1rem;
}

.info {
    text-align: center;
}

@media (min-width: 592px) {
    .card {
        width: 50%;
    }
}

@media (min-width: 992px) {
    .card {
        width: 25%;
    }
}
</style>