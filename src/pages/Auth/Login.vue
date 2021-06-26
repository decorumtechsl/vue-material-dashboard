<template>
      <div class="box">
        <md-card class="md-card login-card-custom">
            <md-card-header-text class="md-centered">
              <app-logo />
              <div class="box-column">
                <h3 class="md-title">Welcome!</h3>
                <p class="category">Sign in here using given credentials</p>
              </div>
            </md-card-header-text>
          <md-card-content>
            <form @submit.prevent="login" name="signInForm" id="signInForm">
              <div class="md-layout">
                <div class="md-layout-item md-small-size-200  md-medium-size-10">
                    <error-message v-if="hasError" :message="errorMessage" />
                    <md-field class="md-error">
                      <label>User name</label>
                      <md-input class="input" v-model="username" aria-required="true" />
                    </md-field>
                    <md-field class="messageClass">
                      <label>Password</label>
                      <md-input type="password" class="input" v-model="password" aria-required="true" />
                    </md-field>
                </div>
              </div>
              <div>
                <div class="md-layout-item md-small-size-200  md-medium-size-10">
                  <md-button class="btn-lg lore-button" @click="login" >Sign in</md-button>
                </div>
              </div>
            </form>
          </md-card-content>
        </md-card>
      </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: "Login",
  data: function(){
    return {
      username: "",
      password: "",
      hasError: false,
      errorMessage: null
    };
  },
  computed: {
    messageClass () {
      return {
        'md-invalid': this.hasError
      }
    },
    ...mapState({
        auth: state => state.auth
    }),
    ...mapGetters('auth',{
      auth: "isAuthenticated"
    }),
  },
  methods: {
    login : async function (e) {
      e.preventDefault();
      if(!this.username || !this.password) {
        this.hasError = true;
        this.errorMessage = 'User name/ Password required';
        return 0;
      }

      let payload = {"username": this.username, "password": this.password};
      await this.$store.dispatch('auth/signIn', payload);
      if(this.auth.authenticated) this.$router.push('/teachers');

    }
  }

}
</script>


