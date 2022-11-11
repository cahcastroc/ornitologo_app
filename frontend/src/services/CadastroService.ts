import { User } from "../models/User";

const axios = require('axios');

export class CadastroService{
    constructor(){

    }

    async postUser(user: User) {
        const response = await axios.post(`/usuarios`, user);
        return response.data;
    }
}