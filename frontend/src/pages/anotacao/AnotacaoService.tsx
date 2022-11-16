import axios from "axios";
import { Anotacao } from "../../models/Anotacao";

export class AnotacaoService{
    async getAll(): Promise<Anotacao[]>{
        const token = localStorage.getItem("token");
        let respose = await axios.get("http://localhost:8080/anotacoes", {headers:{
            'Authorization': `Bearer ${token}`
        }});
        return respose.data;
    }
}