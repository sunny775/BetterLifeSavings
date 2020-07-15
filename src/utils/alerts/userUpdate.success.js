import { store } from 'react-notifications-component';

export const successNotice = (message) => {
    store.addNotification({
        title: "Success!",
        message,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
}