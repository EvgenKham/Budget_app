<template>
  <div class="budget-list-wrap">
    <el-card :header="header">
      <template v-if="!isEmpty">
        <div class="btn-sort">
          <el-button type="primary" round @click="sortList('INCOME')">Income</el-button>
          <el-button type="primary" round @click="sortList('OUTCOME')">Outcome</el-button>
          <el-button type="primary" round @click="sortList('ALL')">All</el-button>
        </div>

        <div v-for="(item, prop) in list" :key="prop">
          <BudgetListItem
            :item="item"
            @deleteItem="deleteItem">
          </BudgetListItem>
        </div>
      </template>
      <el-alert v-else type="info" :title="emptyTitle" :closable="false"/>
    </el-card>
  </div>
</template>

<script>
import BudgetListItem from '@/components/BudgetListItem';

export default {
  name: "BudgetList",
  components: {
    BudgetListItem
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List',
    // sortedList: {
    //   type: Object,
    //   default: () => ({}),
    // },
  }),
  // created() {
  //   this.sortedList = this.getList;
  // },
  computed: {
    // ...mapGetters("transactions",["getList"]),
    isEmpty() {
      return !Object.keys(this.list).length;
    }
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
    sortList (type) {
      this.$emit("sotrList", type);
    },
  }
}
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>
