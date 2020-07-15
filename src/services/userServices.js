import axios from "axios";
/*import { app } from "../config/firebase";
import config from "../config/system";
const { auth, db, storageRef } = app;
const user = auth.currentUser;*/

class userService {
  constructor() {
    this.setDefaults();
  }

  setDefaults() {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json";
  }

  

  /* createUser(user) {
    return new Promise((resolve, reject) => {
      axios
        .post(config.userBaseUrl + "/register", {
          ...user,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }
  getUser() {
    return new Promise((resolve, reject) => {
      axios
        .get(config.userBaseUrl + "/auth")
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  login(options) {
    return new Promise((resolve, reject) => {
      axios
        .post(config.userBaseUrl + "/login", {
          ...options
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }*/
}

const instance = new userService();
export default instance;
