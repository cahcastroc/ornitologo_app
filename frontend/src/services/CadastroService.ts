import { User } from "../models/User";
import axios from "axios";

export class CadastroService {
    async postUser(user: User) {
        return axios("http://localhost:8080/usuarios", {
            method: "POST",
            data: user,
        }).then((response) => {
            return response.data;
        });
    }
}
