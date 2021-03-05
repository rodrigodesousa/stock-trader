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
                    <input type="number" v-model="quantity" class="form-control" placeholder="Quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-info" @click="sellStock" :disabled="quantity <= 0 || !Number.isInteger(Number(quantity))">Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    props: [ 'stock' ],
    data: () => ({
        quantity: 0
    }),
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