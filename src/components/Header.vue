<template>
	<div class="header">
		<h3>Товаров в корзине на: {{ cartPrice.toFixed(2) }} {{ currency }}</h3>
	</div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: 'Header',
        data() {
            return {
                cartPrice: 0,
            };
        },
        computed: {
            ...mapState({
                currency: state => state.ui_variable.currency
            }),
            ...mapGetters(['getCartPrice']),
        },
        watch: {
            '$store.state.cart': {
                handler(cart) {
                    let allCartPrice = 0
                    cart.forEach(e => {
                        allCartPrice += +e.price
                    })
                    this.cartPrice = allCartPrice
                },
                deep: true
            },
        },
    }
</script>

<style scoped>
	.header {
		padding: 10px;
		background: #e5e5e5;
	}
</style>
