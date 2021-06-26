<template>
 <div class="error">
   <label for="errorMessage">{{message}}</label>
 </div>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: {
    message: null
  }
}

</script>

<style scoped>
 .error {
   background: red;
   color: white;
   width: 100%;
   border-radius: .25rem;
   font-size: 1rem;
 }
</style>
