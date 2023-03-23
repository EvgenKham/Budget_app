<template>
  <div id="app">
    <Form @submitForm="onSubmit"></Form>
    <TotalBalance :total="getTotalBalance"></TotalBalance>
    <BudgetList
      :list="sort"
      @deleteItem="onDeleteItem"
      @sotrList="onSortList">
    </BudgetList>
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';
import Form from '@/components/Form';
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  data: () => ({
    sortedList: {
      type: Object,
      default: () => ({}),
    },
  }),
  computed: {
    ...mapGetters("transactions", [
      "getTotalBalance",
      "getList",
      "filteredList",
    ]),
    sort(type) {
      if(!this.sortedList){
        return this.filteredList(type);
      }
      return this.sortedList;
    }
  },
  methods: {
    ...mapActions("transactions", [
      "addNewTransaction",
      "deleteTransacrion"
    ]),
    onDeleteItem(id) {
      this.deleteTransacrion(id);
    },
    onSubmit(data) {
      this.addNewTransaction(data);
    },
    onSortList(type) {
      this.sortedList = this.filteredList(type);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
