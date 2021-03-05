<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" v-model="quantity" class="form-control" placeholder="Quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(Number(quantity))">Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'stock' ],
    data: () => ({
        quantity: 0
    }),
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                quantity: Number(this.quantity),
                price: this.stock.price
            }
            console.log(order)
            this.quantity = 0
        }
    }
}
</script>