let socket = io();

socket.on("connect", function () {
  $(document).ready(function () {
    $("#led1").change(function () {
      if ($(this).prop("checked")) {
        senddata(true);
      } else {
        senddata(false);
      }
    });
  });
  console.log("Server connected");
  function senddata(message) {
    console.log(message);
    socket.emit("OnOff", message);
  }
});
