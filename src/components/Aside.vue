<template>
	<el-menu
		default-active="1-4-1"
		class="el-menu-vertical-demo"
		@open="handleOpen"
		@close="handleClose"
		:collapse="isCollapse"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b"
		style="height: 100vh"
	>
		<h2><label for="">{{isCollapse? '后台':'后台管理系统'}}</label></h2>
		<el-menu-item
			:index="item.path+''"
			v-for="item in noChildren"
			:key="item.path"
      @click="clickMenu(item)"
		>
			<i :class="'el-icon-' + item.icon"></i>
			<span slot="title">{{ item.label }}</span>
		</el-menu-item>
		<el-submenu v-for="item in hasChildren" :index="item.path+''" :key="item.path">
			<template slot="title">
				<i :class="'el-icon-' + item.icon"></i>
				<span slot="title">{{ item.label }}</span>
			</template>
			<el-menu-item-group
				v-for="(subitem, index) in item.children"
				:key="subitem.path"
			>
				<el-menu-item :index="index.toString()" @click="clickMenu(subitem)">{{ subitem.label }}</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{
					path: "/",
					name: "home",
					label: "首页",
					icon: "s-home",
					url: "Home/Home",
				},
				{
					path: "/mall",
					name: "mall",
					label: "商品管理",
					icon: "video-play",
					url: "MallManage/MallManage",
				},
				{
					path: "/user",
					name: "user",
					label: "用户管理",
					icon: "user",
					url: "UserManage/UserManage",
				},
				{
					label: "其他",
					icon: "location",
					children: [
						{
							path: "/pageOne",
							name: "pageOne",
							label: "页面1",
							icon: "setting",
							url: "Other/PageOne",
						},
						{
							path: "/pageTwo",
							name: "pageTwo",
							label: "页面2",
							icon: "setting",
							url: "Other/PageTwo",
						},
					],
				},
			],
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
    clickMenu(item){
      this.$router.push(({
        name:item.name
      }))
			this.$store.commit('selectMenu',item)
    }
	},
	computed: {
		noChildren() {
			return this.menu.filter((item) => !item.children);
		},
		hasChildren() {
			return this.menu.filter((item) => item.children);
		},
		isCollapse(){
			return this.$store.state.tab.isCollapse
		}
	},
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
h2 {
	color: white;
	text-align: center;
}
</style>
