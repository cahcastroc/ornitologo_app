import axios from "axios";
import IAnotacao from "../interfaces/IAnotacao";


export class AnotacaoService{

    async deleteAnotacao(id:number){
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            console.log(response.status) 
        })
    }

    async editAnotacao(id:number,anotacao: IAnotacao){
        return axios(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method:"PUT",
            data: anotacao,
        }).then ((response)=>{           
            // return response.data;
           console.log(response.status)  
        })
    }
}
