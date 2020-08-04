import axios from "axios";
import config from "../config/system";
/*import { app } from "../config/firebase";
import config from "../config/system";
const { auth, db, storageRef } = app;
const user = auth.currentUser;*/

const server =
  "AAAATCLtp8Q:APA91bGjZsBRHJTI7r0VLGfacrPakb-nuC8wMt4WYTBg6siIM5hTVUm5ZjY_wVVLk1FmAO2Lxtdiqz3b_-5g6F0XEPvzeb4PNZvfjKSbBcW5Air7UQ_mwUlXKD9KhVFPfyO907OVKX5m";

class notificationService {
  constructor() {
    this.setDefaults();
  }

  setDefaults() {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json";
    axios.defaults.headers.common["Authorization"] = `key=${server}`;
  }

  notifyNewUser(device) {
    if(!device) return 
    const body = {
      notification: {
        title: "Welcome to Better Life Savings",
        body: "Proceed to complete your account details and start saving",
        click_action: config.clientBaseUrl,
        icon: "/apple-touch-icon.png",
      },
      to: device,
    };
    axios
      .post("https://fcm.googleapis.com/fcm/send", {
        ...body,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

 
  notifyUserOnDepositRequest(deviceToken) {
    if(!deviceToken) return 
    console.log(deviceToken)
    const body = {
      notification: {
        title: "Better Life Savings",
        body:
          "Your deposit request has been sent. Our agents will contact you to complete your deposit",
        click_action: config.clientBaseUrl,
        icon: "/apple-touch-icon.png",
      },
      to: deviceToken,
    };
    axios
      .post("https://fcm.googleapis.com/fcm/send", {
        ...body,
      })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  notifyUserOnWithdrawalRequest(deviceToken ) {
    if(!deviceToken) return 
    const body = {
      notification: {
        title: "Better Life Savings",
        body:
          "Your withdrawal request has been sent. Our agents will contact you to complete your request and deliver your funds",
        click_action: config.clientBaseUrl,
        icon: "/apple-touch-icon.png",
      },
      to: deviceToken,
    };
    axios
      .post("https://fcm.googleapis.com/fcm/send", {
        ...body,
      })
      .then((response) => {
        console.log(response);
       return response;
        
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
}

const instance = new notificationService();
export default instance;
