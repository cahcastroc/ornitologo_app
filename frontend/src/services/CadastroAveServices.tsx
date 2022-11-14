import axios from "axios";
import { Ave } from "../models/Ave";

export class CadastroAveService {
  async cadastrarAve(ave: Ave) {
    return axios("http://localhost:3001/aves", {
      method: "POST",
      data: ave,
    }).then((response) => {
      console.log(response);
      return response.data;
    })
  }
}