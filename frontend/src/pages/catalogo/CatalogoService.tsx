import axios from "axios";
import IAve from "../../interfaces/IAve";
import { IUser } from "../../interfaces/User";

export class CatalogoService {
  getAves() {
    return axios
      .get<Array<IAve>>(`http://localhost:8080/aves`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {   
        console.log(response.data)   
        return response.data;
      });
  } 
}
