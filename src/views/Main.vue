<template>
	<el-container style="height: 100%">
		<el-aside width="auto"><Aside></Aside></el-aside>
		<el-container>
			<el-header><VHeader></VHeader></el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import Aside from '../components/Aside.vue'
import VHeader from '../components/VHeader.vue'
export default {
	name: "Main",
	data() {
		return {};
	},
  components:{Aside,VHeader}
};
</script>

<style lang="less" scoped>
.el-header{
  background-color: black;
}
.el-main{
  padding-top: 0;
}
</style>