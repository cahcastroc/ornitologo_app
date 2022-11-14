import axios from "axios";
import { Ave } from "../models/Ave";

export class CadastroAveService {
  async cadastrarAve(ave: Ave) {
    return axios("http://localhost:3000/aves", {
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`},
      method: "POST",
      data: ave,
    }).then((response) => {
      return response.data;
    })
  }
}