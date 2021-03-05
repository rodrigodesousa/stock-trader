<template>
    <div>
        <Stock v-for="stock in stocks" :stock="stock" :key="stock.id" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Stock from '@/components/portfolio/Stock'

export default {
    data: () => ({}),
    components: {
        Stock
    },
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },

}
</script>