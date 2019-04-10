<template>

	<div>这是接收了父组件传递值的子组件的childArray: {{counter}}
		<br> <button type="button" @click="changeArray"> 点击我改变父元素的parentArray </button>
		<div @click="ggs">调用父亲GG是</div>
		<img :src="gg+'icon_account_selected.png'" alt="">
	</div>

</template>

<script>
	export default {
		data() {
			return {
				counter: this.parentArray,
				gg:'../../../static/icon/'
			};
		},
		watch: {},
		mounted() {
			console.log("parentArray"+this.parentArray)
		},
		methods: {
			changeArray() {
				this.counter++;
//				调用父组件，最多两个一次
				this.$emit("add",this.counter);
			}

		
		},
		props: {
			parentArray: '',
			ggs:'',
			//			fn: ,
			//			ary: Array,
			//			obj: Object,
			//			bol: Boolean
		}

	}
</script>

<style>

</style>