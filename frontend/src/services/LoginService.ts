import axios from "axios";
import { User } from "../models/User";

export class LoginService{
    async login(user: User){
        return axios("http://localhost:8080/usuarios/login", {
            method: "POST",
            data: user,
        }).then((response) => {
            console.log(response);
            localStorage.setItem("token", response.data);
        });
    }
}