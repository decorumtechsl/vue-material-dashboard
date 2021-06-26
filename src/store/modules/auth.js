import auth from "@/api/authAPI";

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAILED  = 'AUTH_FAILED';
const AUTH_VALIDATION_FAILED = 'AUTH_VALIDATION_FAILED';

const state = () => ({
   authenticated: false,
   authToken: null,
   authErrorMessage: null,
   authErrorPayload: null
});

const getters = {
    isAuthenticated: (state) => {
        if(state.authenticated) {
            return {
                "authenticated": state.authenticated,
                "authToken": state.authToken
            };
        }

        return {
            "authenticated": this.state.authenticated,
            "authErrorMessage": this.state.authErrorMessage,
            "authErrorPayload": this.state.authErrorPayload
        };
    }
};

const actions = {
    async signIn({commit, state}, payload) {
        const authResponse = await auth.login(payload);
        console.log('authResponse', authResponse);

        if(authResponse.status === 422) {
            commit('setValidationLoginResponse', authResponse.data);
        }

        if(authResponse.status == 200 && authResponse.data.success === false) {
            commit('setFailedLoginResponse', authResponse.data);
        }

        commit('setSuccessLoginResponse', authResponse.data);
    }
};


const mutations = {
    setSuccessLoginResponse(state, payload) {
        state.authenticated  = true;
        state.authToken = payload.data.accessToken;
    },

    setFailedLoginResponse(state, payload) {
        state.authenticated  = false;
        state.authErrorMessage = payload.message;
    },

    setValidationLoginResponse(state, payload) {
        state.authenticated  = false;
        state.authErrorPayload = payload;
    },
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
