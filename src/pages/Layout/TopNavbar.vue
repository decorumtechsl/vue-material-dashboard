<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <md-list>
            <md-list-item href="#/user">
              <md-avatar>
                <img class="img" :src="ProfilePhoto"  />
                </md-avatar>
              <h5>{{profileName}}</h5>
            </md-list-item>
            <md-list-item href="#/user">
              <h5>Log out</h5>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  props: {
    profileName: {
        type: String,
        default: 'Admin'
      },
    ProfilePhoto: {
        type: String,
        default: require("@/assets/img/faces/marc.jpg")
      }
    ,
    showSidebar: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.props.showSidebar);
    }
  }
};
</script>

<style lang="css"></style>
