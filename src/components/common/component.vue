<template>
	<div>
		<div>这是父组件的parentArray：{{ parentArray }}</div>
		<div>这是父组件的parentArrays：{{ parentArrays }}</div>
		<componentA ref="myc1" :parentArray="parentArray" :ggs="ggs" v-on:add="add"></componentA>
	</div>
</template>

<script>
import componentA from './components.vue';
console.log(componentA);
export default {
	data() {
		return {
			parentArray: '55',
			parentArrays: '56'
		};
	},
	watch: {},
	mounted() {
		console.log(this.$Vuex);
		console.log(this.$api)
		
	},
	methods: {
		ggs() {
			//				调用子组件
			this.$refs.myc1.changeArray();
		},
		add(i) {
			this.parentArrays = i;
			console.log(i);
		}
	},
	components: {
		componentA
	}
};
</script>

<style></style>
