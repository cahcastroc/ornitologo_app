import axios from "axios";
import { IUser } from "../../interfaces/User";

export class LoginService{
    async login(user: IUser){
        return axios("http://localhost:8080/usuarios/login", {
            method: "POST",
            data: user,
        }).then((response) => {
            localStorage.setItem("token", response.data);
        });
    }
}