import axios from "axios";
import {HTTP} from "@/api/http-common";

const auth = {
    async login(payload) {

        return await HTTP.post('login', {
            "user_name": payload.username,
            "password": payload.password
        });
    },
};

export default auth;
