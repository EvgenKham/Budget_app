<template>
  <div class="budget-list-item">

    <div class="icon">
      <i class="el-icon-top" v-if="item.value > 0"></i>
      <i class="el-icon-bottom" v-else></i>
    </div>

    <span class="budget-comment">{{ item.comment }}</span>
    
    <div class="budget-value">
      <span class="positive-value" v-if="item.value > 0">{{ item.value }}</span>
      <span class="negative-value" v-else>{{ item.value }}</span>
    </div>

    <el-button type="danger" size="mini" @click="dialogVisible = true">Delete</el-button>

    <el-dialog title="Delete item" :visible.sync="dialogVisible" width="250px">
      <span>You want to delete this element?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="deleteItem(item.id)">Confirm</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "BudgetListItem",
  data: () => ({
    dialogVisible: false,
  }),
  props: {
    item: {
      value: 0,
      comment: "",
      id: 0,
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
  },
};
</script>

<style scoped>
.budget-list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
.icon {
  margin-right: 15px;
}
.positive-value {
  color: green;
}
.negative-value {
  color: red;
}
</style>