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
    $('#login').click(function (e) {
      e.preventDefault();
      socket.emit('loginVerify', {
        email: $('#u_name').val(),
        pass: $('#u_pass').val()
      })
    });
  });
  console.log("Server connected");
});

function senddata(message) {
  console.log(message);
  socket.emit("OnOff", message);
}