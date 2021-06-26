<template>
  <md-toolbar md-elevation="0" class="md-transparent md-toolbar-custom">
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
            <md-list-item href="#">
              <div>
                <md-avatar>
                  <img class="img" :src="ProfilePhoto"  />
                </md-avatar>
                <label class="profile-name-label">{{profileName}}</label>
              </div>
            </md-list-item>
            <hr class="vertical-divider-no-height" />
            <md-list-item href="#/user">
              <div>
                <button @click="logOutHandler"  class="main-action-button">Log out</button>
              </div>
            </md-list-item>
          </md-list>

          <md-dialog
              class="md-small"
              :md-active.sync="this.showDialog">
            <md-dialog-content>
              <h6>Do you want to log out  thisi?</h6>
            </md-dialog-content>
            <md-divider class="md-horizontal" />
            <md-dialog-actions class="box">
              <button class="main-action-button" @click="onConfirm">Yes</button>
              <hr class="vertical-divider" />
              <button class="cancel-action-button" @click="onCancel">No</button>
            </md-dialog-actions>
          </md-dialog>

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
    },
    showSidebar: {
      type: Boolean,
      default: true
    },
  },
  data()  {
    return {
      showDialog:false
    }
  },
  mounted() {

  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.props.showSidebar);
    },
    onConfirm () {
      console.log('THis clicked');
    },
    onCancel () {
      this.showDialog = false;
    },
    logOutHandler() {
      this.showDialog = true;
    }
  }
};
</script>
