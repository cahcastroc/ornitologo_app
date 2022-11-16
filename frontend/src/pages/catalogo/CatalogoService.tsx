import axios from "axios";
import IAve from "../../interfaces/IAve";
import { IUser } from "../../interfaces/User";

export class CatalogoService {
  //   async getAves() {
  //     const response = await axios("http://localhost:8080/aves", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         method: "GET",
  //         "Content-Type": "application/json"
  //       },
  //     }).then((response) => {
  //       console.log(response.data);
  //       return response;
  //     });
  //     return response.data;
  //   }

  getAves() {
    return axios
      .get<Array<IAve>>(`http://localhost:8080/aves`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
      
        return response.data;
      })

            
  }

  // getAves() : IAve[]{
  //         return axios
  //   .get <IAve[]>(`http://localhost:8080/aves`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //     return response.data;

  //   });
  // }
}
