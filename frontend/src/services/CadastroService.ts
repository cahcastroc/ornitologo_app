import axios from 'axios'
import { User } from "../models/User";

export class CadastroService{
    async postUser(user: User) {
        const response = await axios.post<User>(`/usuarios`, user);
        return response.data;
    }
}