import axios from "axios";
import { IAve } from "../../interfaces/IAve";


export class CatalogoService {
  loginToken = JSON.parse(localStorage.getItem("token") || "{}");

  getAves() {
    return axios
      .get<Array<IAve>>(`http://localhost:8080/aves`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.loginToken.token,
        },
      })
      .then((response) => {          
        return response.data;
      });
  } 
}
