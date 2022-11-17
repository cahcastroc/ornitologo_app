import axios from "axios";
import { IUser } from "../../interfaces/IUser";

export class CadastroService {
    async postUser(user: IUser) {
        return axios("http://localhost:8080/usuarios", {
            method: "POST",
            data: user,
        }).then((response) => {
            return response.data;
        });
    }
}
