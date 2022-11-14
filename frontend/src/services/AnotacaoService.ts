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
        return axios(`http://localhost:8080/anotacoes/${id}`, { 
            headers:{"Authorization": `Bearer ${localStorage.getItem("token")}`},
            method:"PUT",
            data: anotacao,
        }).then ((response)=>{         
             return response.data
            
        })
    }
}
