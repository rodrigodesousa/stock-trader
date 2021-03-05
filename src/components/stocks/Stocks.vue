<template>
    <div>
        <Stock v-for="stock in stocks" :key="stock.id" />
    </div>
</template>
<script>
import Stock from '@/components/stocks/Stock'

export default {
    components: {
        Stock
    },
    data: () => ({
        stocks: [
            { id: 1, name: 'BMW', price: 110 },
            { id: 2, name: 'Google', price: 210 },
            { id: 3, name: 'Facebook', price: 180 },
            { id: 4, name: 'Apple', price: 200 },
        ]
    })
}
</script>