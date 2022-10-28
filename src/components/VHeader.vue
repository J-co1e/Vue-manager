<template>
	<header>
		<div class="left">
			<el-button
				plain
				icon="el-icon-menu"
				size="mini"
				@click="handleMenu"
			></el-button>
			<el-breadcrumb separator="/" class="aa">
				<el-breadcrumb-item
					v-for="item in tabList"
					:key="item.path"
					:to="{ path: item.path }"
          
					>{{ item.label }}</el-breadcrumb-item
				>
			</el-breadcrumb>
		</div>
		<div class="right">
			<el-dropdown trigger="hover" size="mini">
				<span>
					<img :src="UserImg" class="user" />
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>个人中心</el-dropdown-item>
					<el-dropdown-item>退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</header>
</template>


<script>
import { mapState } from "vuex";
export default {
	name: "VHeader",
	data() {
		return {
			UserImg: require("../assets/logo.png"),
		};
	},
	methods: {
		handleMenu() {
			this.$store.commit("changeCollapse");
		},
	},
	computed: {
		...mapState({
			tabList: (state) => state.tab.tabList,
		}),
	},
};
</script>

<style lang="less" scoped>
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	.left {
		display: flex;
		align-items: center;
		button {
			width: 45px;
			height: 28px;
			margin-right: 10px;
		}
		.aa{
      color: #fff;
    }
	}
	.right {
		img {
			width: 35px;
			height: 35px;
			border-radius: 50%;
			background-color: white;
			transform: translateY(5px);
		}
	}
}
</style>