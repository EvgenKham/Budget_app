<template>
  <el-card class="form-card" >
    <el-form :model="formData" ref="addItemForm" :rules="rules" label-position="top">
      <el-form-item label="Type" prop="type">
        <el-select class="type-select" v-model="formData.type" placeholder="Choose type...">
          <el-option label="Income" value="INCOME"/>
          <el-option label="Outcome" value="OUTCOME"/>
        </el-select>
      </el-form-item>
      <el-form-item label="Comments" prop="comment">
        <el-input v-model="formData.comment" />
      </el-form-item>
      <el-form-item label="Value" prop="value">
        <el-input v-model.number="formData.value" />
      </el-form-item>
      <el-button @click="onSubmit" type="primary">Submit</el-button>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "Form",
  data() {
    // Custom validation. Use custom validation rules from framework 'Element ui'
    const checkValue = (rule, value, callback) => {
      if (value === 0) {
          return callback(new Error('Value can\'t be \'0\''));
      } else {
          callback();
      }
    };
    return {
      formData: {
        type: 'INCOME',
        comment: '',
        value: 0,
      },
      rules: {
        type: [{ required: true, message: 'Please select type', trigger: 'blur' }],
        comment: [{ required: true, message: 'Please input comment', trigger: 'blur' }],
        value: [
          { required: true, message: 'Please input value', trigger: 'change' },
          { type: 'number', message: 'Value must be a number', trigger: 'change' },
          { validator: checkValue, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if(valid) {
          this.formData.value = this.isCorrectSign();
          this.$emit('submitForm', { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    },

    //Add a sign "-", if the input value "Outcome" doesn't have it
    isCorrectSign(){
      const budgetInputType = this.formData.type.toLowerCase();
      const spend = 'outcome';
      let value = this.formData.value;
        if(budgetInputType === spend){
          value = -(this.formData.value);
        }
      return value;
    }
  }
}
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.type-select {
  width: 100%;
}
</style>