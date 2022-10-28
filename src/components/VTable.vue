<template>
	<div>
		<div class="vtable">
			<el-table :data='tableData' stripe style="height:50%">
				<el-table-column show-overflow-tooltip="true" v-for="item in tableLabel" :key="item.prop" :label="item.label" :width="item.width>125? item.width:125">
					<template slot-scope="scope">
						<span style="margin-left:10px">{{scope.row[item.prop]}}</span>
					</template>
				</el-table-column>
				<el-table-column label="操作" min-width="180px">
					<template slot-scope="scope">
						<el-button @click="handleEdit(scope.row)" size="mini">编辑</el-button>
						<el-button @click="handleDelete(scope.row)" size="mini" type="danger">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination class="pager" layout="prev,pager,next" :total="config.total" :current-page="config.page" @current-change='pageChange' :page-size="10">

			</el-pagination>
		</div>

	</div>

</template>

<script>
export default {
	name: "VTable",
	data() {
		return {};
	},
	props: {
		tableLabel: Array,
		tableData: Array,
		config: Object,
	},
	methods: {
		handleEdit(row) {
			this.$emit("edit", row);
		},
		handleDelete(row) {
			this.$emit("del", row);
		},
		pageChange(page) {
			this.$emit("changePage", page);
		},
	},
};
</script>

<style lang="less" scoped>
.vtable {
	height: calc(100%-62px);
	background-color: #fff;
}
.pager {
	position: absolute;
	bottom: 0px;
	margin-top: 5px;
	right: 35%;
}
</style>