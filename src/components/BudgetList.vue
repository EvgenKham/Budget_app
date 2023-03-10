<template>
  <div class="budget-list-wrap">
    <el-card :header="header">
      <template v-if="!isEmpty">
        <div class="btn-sort">
          <el-button type="primary" round @click="onSortList('INCOME')">Income</el-button>
          <el-button type="primary" round @click="onSortList('OUTCOME')">Outcome</el-button>
          <el-button type="primary" round @click="onSortList('ALL')">All</el-button>
        </div>

        <div v-for="(item, prop) in sortedList" :key="prop">
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
    sortedList: {},
  }),
  created() {
    this.onSortList('ALL');
  },
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    }
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
    onSortList (type) {
      // converting the object to the array because method 'filter' is working only with arrays
      const listAll = Object.values(this.list);

      if(type === 'ALL') {
        this.sortedList = this.list;
      } else {
        const resultArr = listAll.filter( item => item.type === type );
        // converting the array to the object because in start 'sortedList' is object (This isn't necessary)
        this.sortedList = { ...resultArr };
      }
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
