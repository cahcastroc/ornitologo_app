import axios from "axios";
import { IAve } from "../interfaces/Ave";

export class CadastroAveService {
  async cadastrarAve(ave: IAve) {
    return axios("http://localhost:8080/aves", {
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`},
      method: "POST",
      data: ave,
    }).then((response) => {
      return response.data;
    })
  }
}