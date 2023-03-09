<template>
  <div class="total-value positive" v-if="total > 0">Balance: {{ total }}</div>
  <div class="total-value negative" v-else-if="total < 0">Balance: {{ total }}</div>
  <div class="total-value zero" v-else>Balance: {{ total }}</div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
   total: {
    type: Number,
    default: 0,
   },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
.positive {
  color: green;
}
.negative {
  color: red;
}
.zero {
  color: black;
}
</style>