import { User } from "../models/User";
import axios from 'axios'

export class CadastroService{
    async postUser(user: User) {
        // const response = await axios.post<User>(`http://localhost:8080/usuarios`, user, {headers:{'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',}});
        const amogus = await fetch(`http://localhost:8080/usuarios`, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: `{
                "email": "jonas@hotmail.com",
                "nome": "jonas",
                "senha": "123"
              }`})
        return amogus.body;
    }
}