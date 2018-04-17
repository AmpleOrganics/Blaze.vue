<template>
  <form @submit.prevent="formSubmit">
    <slot/>
  </form>
</template>

<script>
// How to use
// 1. create an ao-form in your parent and wrap your inputs
// 2. pass a @formHanlder action that will be what happens when you submit your form
// 3. add a ao-button inside your form with a prop of `:type="'submit'"`

// now when you click your button it will call the function tied to the @formHandler
export default {
  methods: {
    formSubmit () {
      this.$emit('formHandler')
    }
  }
}
</script>

<style lang='scss' scoped>
.ao-form-group {
  margin-bottom: $spacer;
}
</style>
