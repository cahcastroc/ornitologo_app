import axios from "axios";
import IAnotacao from "../../interfaces/IAnotacao";

export class AnotacaoService {
    private loginToken = JSON.parse(localStorage.getItem("token") || "{}");

    async create(anotacao: IAnotacao){
        return axios.post("http://localhost:8080/anotacoes", anotacao, {
            headers:{
                Authorization: this.loginToken.token
            }
        });
    }

    async deleteAnotacao(id: number) {
        return axios(`http://localhost:8080/anotacoes/${id}`, {
            headers: {
                Authorization: this.loginToken.token
            },
            method: "DELETE",
        }).then(() => {           
            alert(`Anotação deletada com sucesso!`);
        });
    }

    async editAnotacao(id: number, anotacao: IAnotacao) {
        return axios(`http://localhost:8080/anotacoes/${id}`, {
            headers: {
                Authorization: this.loginToken.token,
            },
            method: "PUT",
            data: anotacao,
        }).then((response) => {
            alert(`Sucesso: anotação salva!`);
            return response.data;
        }).catch((error) => {
            alert(
                `Erro: anotação não editada - Descrição do erro: ${error}`
            );
        });
    }

    async getAnotacao() {
        return axios(`http://localhost:8080/anotacoes/`, {
            headers: {
                Authorization: this.loginToken.token,
            },
            method: "GET",
        }).then((response) => {
            return response.data;
        });
    }
}
