<template>
    <div>
        <Stock v-for="stock in stocks" :stock="stock" :key="stock.id" />
    </div>
</template>
<script>
import Stock from '@/components/stocks/Stock'

export default {
    components: {
        Stock
    },
    data: () => ({}),
    computed: {
        stocks() {
            return this.$store.getters.stocks
        }
    }
}
</script>