<template>
	<div class="cart-list">
		<ul>
			<li v-for="item in getCart">
				{{item.title}} {{item.amount}}кг. Стоимость {{item.price}}
			</li>
		</ul>
	</div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters(['getCart']),

			//Перенесено в vuex
            /*spisok_dlya_rendera() {
                return this.cart.reverse();
            },*/
        },
    };
</script>

<style>

	.cart-list {
		padding: 10px;
	}

	li {
		list-style: inside;
	}

</style>
