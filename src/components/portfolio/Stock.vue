<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" :class="{danger: insufficientQuantity}" v-model="quantity" class="form-control" placeholder="Quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-info" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(Number(quantity))">{{ insufficientQuantity ? 'Not Enough Stocks' : 'Sell'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>
<script>
import { mapActions } from 'vuex'

export default {
    props: [ 'stock' ],
    data: () => ({
        quantity: 0
    }),
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock'
        }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                quantity: this.quantity,
                price: this.stock.price
            }
            this.placeSellOrder(order)
            this.quantity = 0
        }
    }
}
</script>