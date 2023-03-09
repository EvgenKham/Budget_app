<template>
  <div class="budget-list-item">
    <span class="budget-comment">{{ item.comment }}</span>
    <span class="budget-value">{{ item.value }}</span>

    <el-button type="danger" size="mini" @click="dialogVisible = true">Delete</el-button>

    <el-dialog
      title="Delete item"
      :visible.sync="dialogVisible"
      width="250px">
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
      comment: '',
      id: 0,
    }
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    }
  }
}
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
</style>