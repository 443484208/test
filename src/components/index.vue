
<template>
	<div>
 hello world!
 <h1 v-once>{{houer}}</h1>
 <h1 >{{houer}}</h1>
 <button @click="clickHouer()">点击</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			houer:10,
		};
	},
	mounted() {
		this.$api.login({a:'2222'}).then(response => {  
                        console.log("请求成功");  
                        console.log(response);  
                    },  
                    response => {  
                        console.log("请求失败");  
                        console.log(response);  
                    }  
                )  
	},
	methods: {
		clickHouer(){
			this.houer=this.houer+1;
		}
		
	},
  computed: {
  },
	watch: {
	},
	components: {},
	computed: {
	},
  updated (){},
  created() {}
};
</script>

