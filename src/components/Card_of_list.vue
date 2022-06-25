<template>
	<div class="card"
	>
		<p class="card-title">{{ item.title }}</p>
		<img class="card-image"
			 :src="item.image"
			 alt=""
		/>
		<p class="card-price">
			Цена: {{ item.price }} {{ currency }}
		</p>

		<div>
			<input
					v-model="valueOfField"
					type="number"
					:id="item.id"
			>
			<span>кг</span>
		</div>
		<button @click="addToCart(item)"> В корзину</button>
	</div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Card_of_list",
        data() {
            return {
                valueOfField: 1,
            }
        },
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        methods: {
            addToCart(product) {
                //Не добавляем товар, если пользователь не проставил кол-во кг
                if (+this.valueOfField === 0) return

                //Код не актуален, т.к карта товара перенесена в отдельный компонент, который имеет свою уникальную модель данных
                //let amount = this.$refs.amount.find((input) => input.id === product.id).value;

                let amount = this.valueOfField

                let data = {
                    id: product.id,
                    title: product.title,
                    amount,
                    price: (product.price * amount),
                };

                this.$store.commit('addProductToCart', data)
            },
        },
        computed: {
            ...mapState({
                currency: state => state.ui_variable.currency
            }),
        },

    }
</script>

<style scoped>
	.card {
		display: inline-block;

		width: 100%;

		border: 1px solid #908888;
		border-radius: 5px;

		text-align: center;

		margin-bottom: 15px;
		padding: 10px;
	}

	@media screen and (min-width: 480px) and (max-width: 839px){
		.card {
			max-width: 49%;

		}

		.card:not(:nth-child(2n)) {
			margin-right: 2%;
		}
	}

	@media screen and (min-width: 840px) {
		.card {
			max-width: 31.333333%;

		}

		.card:not(:nth-child(3n)) {
			margin-right: 3%;
		}
	}

	.card-image {
		width: 100%;
	}

	button {
		padding: 5px;
		margin: 5px;
	}
</style>