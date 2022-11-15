import axios from "axios";
import React from "react";
import IAnotacao from "../interfaces/IAnotacao";


export class AnotacaoService{
    

    async deleteAnotacao(id:number){        
       return axios(`http://localhost:8080/anotacoes/${id}`,{ 
        headers:{"Authorization": `Bearer ${localStorage.getItem("token")}`},
        method:"DELETE",        
    })
        .then((response)=>{
            console.log(response.status) 
            alert(`aNOTAÇÃO ID: ${id} deletada`)
        })
    }

    async editAnotacao(id:number,anotacao: IAnotacao){
        return axios(`http://localhost:8080/anotacoes/${id}`, { 
            headers:{"Authorization": `Bearer ${localStorage.getItem("token")}`},
            method:"PUT",
            data: anotacao,
            
        }).then ((response)=>{       
            alert(`Sucesso: anotação salva!`)
            return response.data
            
        }).catch((error)=>{
            alert(`Erro: anotação não editada - Descrição do erro: ${error}`)
            console.log(error)
        })
    }

    async getAnotacao() {
        
        return axios(`http://localhost:8080/anotacoes/`, { 
            headers:{"Authorization": `Bearer ${localStorage.getItem("token")}`},
            method:"GET",
            
        }).then ((response)=>{    
            console.log(response.status)      
            return response.data
            
        })
    }
}
