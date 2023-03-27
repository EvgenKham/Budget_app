<template>
  <div id="app">
    <Form @submitForm="onSubmit"></Form>
    <TotalBalance :total="getTotalBalance"></TotalBalance>
    <BudgetList
      :list="filteredList"
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
    list: {
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
  },
  methods: {
    ...mapActions("transactions", [
      "addNewTransaction",
      "deleteTransaction",
      "changeTypeSort"
    ]),
    onDeleteItem(id) {
      this.deleteTransaction(id);
    },
    onSubmit(data) {
      this.addNewTransaction(data);
    },
    onSortList(type) {
      this.changeTypeSort(type);
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
