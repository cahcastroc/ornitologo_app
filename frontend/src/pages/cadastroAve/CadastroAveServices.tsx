import axios from "axios";
import { IAve } from "../../interfaces/Ave";

export class CadastroAveService {
  loginToken = JSON.parse(localStorage.getItem("token") || "{}");

  async cadastrarAve(ave: IAve) {
    return axios("http://localhost:8080/aves", {
      headers: { Authorization: this.loginToken.token },
      method: "POST",
      data: ave,
    }).then((response) => {
      return response.data;
    });
  }
}
