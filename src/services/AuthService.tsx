import axios from "axios";

class AuthService {
    getCsrf() {
        axios.get(import.meta.env.VITE_APP_HOST_URL + "/sanctum/csrf-cookie").then(
            () => {
            }
        );
    }

    login(email: string, password: string) {
        return axios
            .post(import.meta.env.VITE_APP_API_URL + "/login", {
                email,
                password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                }
                return response.data;
            }).catch(function (error) {
                if (error.response && error.response.data.error) {
                    return error.response.data
                } else {
                    console.log(error);
                }
            });
    }

    logout() {
        return axios
            .post(import.meta.env.VITE_APP_API_URL + "/logout").then(response => {
                if (response.status === 204) {
                    localStorage.removeItem("token")
                    return true;
                }
                return false;
            })
    }

    register(name: string, email: string, password: string) {
        return axios.post(import.meta.env.VITE_APP_API_URL + "/register", {
            name,
            email,
            password
        }).then(response => {
            return response.data;
        }).catch(function (error) {
            if (error.response && error.response.data.error) {
                return error.response.data
            } else {
                console.log(error);
            }
        });
    }
}

export default new AuthService();