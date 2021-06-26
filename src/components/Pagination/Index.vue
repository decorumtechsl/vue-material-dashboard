<template>
  <div class="pagination pull-right">
    <div v-for="page in this.pageCount" :key="page"
         v-bind:class="{selected: isSelected == page}"
         v-on:click="clickOnPageNumber(page)">{{page}}</div>
  </div>
</template>
<script>
  export default {
    name: "Pagination",
    props: ["pages", "clickOnPage"],
    data() {
      return {
        isSelected: 1,
        pageCount: this.$props.pages
      }
    },
    methods: {
      clickOnPageNumber(page) {
        this.isSelected = page;
        console.log("event", page);
      }
    }
  }

</script>
