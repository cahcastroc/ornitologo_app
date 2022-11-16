import axios from "axios";
import { IUser } from "../../interfaces/User";

export class AnotacaoService{
    async getAll(user: IUser){
        const token = localStorage.getItem("token");
        let respose = await axios.get("http://localhost:8080/anotacao", );
        return respose.data;
    }
}