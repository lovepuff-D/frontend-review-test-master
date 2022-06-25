<template>
	<div class="product-list">
		<template
			 v-for="product in products"
		>
			<card :item=product></card>
		</template>
	</div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    import card from '@/components/Card_of_list'

    export default {
        components: {
            card
		},
        data() {
            return {
                products: [],
            };
        },
        computed: {
            //Не актуально т.к для этого предназначены средства css
            /*cardsWidth() {
                let width = window.innerWidth;
                let count = 1;
                if (width > '840px') {
                    count = 3;
                } else if ((width > '420px' && width < '840px')) {
                    count = 2;
                }

                return 100 / count;
            },*/
        },
        methods: {
            async getList() {
                let data = await this.$store.dispatch('getProductsList');
                this.products = data;
            },
            startPricesMonitoring() {
                setInterval(this.getList, 2000);
            },
        },
        created() {
            this.startPricesMonitoring();

            this.getList()//Сразу отрисовываем тот товар, который имеется
        },
    };
</script>

<style>
	.product-list {
		display: flex;
		flex-wrap: wrap;

		padding: 10px;
	}
</style>
