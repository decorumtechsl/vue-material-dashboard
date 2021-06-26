<template>
  <div class="wrapper" :class="{ 'nav-open': this.$sidebar.showSidebar }">

    <side-bar
      :sidebar-item-color="sidebarBackground"
    >
      <sidebar-link to="/teachers">
        <md-icon>person</md-icon>
        <p>Teachers</p>
      </sidebar-link>
      <sidebar-link to="/students">
        <md-icon>people</md-icon>
        <p>Students</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
  },
  data() {
    return {
      sidebarBackground: "green"
    };
  }
};
</script>
