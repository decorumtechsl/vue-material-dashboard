<template>
  <md-card class="md-card-profile card-form">
    <md-card-content>
      <md-card-header-text>
        <h3>Create Student</h3>
      </md-card-header-text>
      <form @submit.prevent="" name="signInForm" id="signInForm">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-200  md-medium-size-10">
<!--            <error-message v-if="hasError" :message="errorMessage" />-->
            <md-field>
              <label>Teacher</label>
              <md-select v-model="teacher" name="font" id="font">
                <md-option value="arial">Arial</md-option>
                <md-option value="calibri">Calibri</md-option>
                <md-option value="cambria">Cambria</md-option>
                <md-option value="comic-sans">Comic Sans</md-option>
                <md-option value="consolas">Consolas</md-option>
                <md-option value="courier">Courier</md-option>
                <md-option value="droid-sans">Droid Sans</md-option>
                <md-option value="georgia">Georgia</md-option>
                <md-option value="helvetica">Helvetica</md-option>
                <md-option value="impact">Impact</md-option>
                <md-option value="roboto">Roboto</md-option>
                <md-option value="segoe-ui">Segoe UI</md-option>
                <md-option value="times-new-roman">Times New Roman</md-option>
                <md-option value="ubuntu">Ubuntu</md-option>
                <md-option value="verdana">Verdana</md-option>
              </md-select>

            </md-field>

            <md-field class="md-error">
              <label>Student ID</label>
              <md-input class="input" v-model="name" aria-required="true" />
            </md-field>
            <md-field class="messageClass">
              <label>Password</label>
              <md-input type="password" class="input" v-model="password" aria-required="true" />
            </md-field>
          </div>
        </div>
        <div>
          <div class="md-layout-item md-small-size-200  md-medium-size-10">
            <md-button class="btn-lg lore-button" >Create</md-button>
          </div>
        </div>
      </form>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "StudentCreate",
  props: {},
  data() {
    return {
      name: "",
      password: "",
      teacher: ""
    };
  }
};
</script>
