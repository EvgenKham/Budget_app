<template>
  <div class="budget-list-item">
    <span class="budget-comment">{{ item.comment }}</span>
    <span class="budget-value">{{ item.value }}</span>
    <el-button type="danger" size="mini" @click="deleteItem(item.id)">Delete</el-button>
  </div>
</template>

<script>
export default {
  name: "BudgetListItem",
  data: () => ({
    one: 'sdsd',
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