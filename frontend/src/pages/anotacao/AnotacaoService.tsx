import axios from "axios";
import { Anotacao } from "../../models/Anotacao";

export class AnotacaoService{
    loginToken = JSON.parse(localStorage.getItem("token") || "{}");
    async getAll(): Promise<Anotacao[]>{
        let respose = await axios.get("http://localhost:8080/anotacoes", {headers:{
            'Authorization': this.loginToken.token
        }});
        return respose.data;
    }
}