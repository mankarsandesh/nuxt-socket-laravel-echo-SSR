import Echo from "laravel-echo";

export default async ({ store, $axios }) => {
  const port = 6001;
  const secretKey = "<your_secretKey>";  
  const socketUrl = "<your_socketUrl>";  
  
  window.io = require("socket.io-client");
  window.Pusher = require("pusher-js");
  
  console.log(typeof io, "socketIO");
  if (typeof io !== "undefined") {
    // connect to web socket
    try {
      window.Echo = new Echo({
        broadcaster: "pusher",
        key: secretKey, 
        wsHost: socketUrl,
        wsPort: port,
        disableStats: true,
        forceTLS: false
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};
