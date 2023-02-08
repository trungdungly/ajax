window.onload = () => {
  document.getElementById("btn").onclick = makeCall;
};
let makeCall = () => {
  console.log("Click Event");
  $.get("/8ball").done(success).fail(failure);
};
let success = (data) => {
  h3 = "<h3>" + data + "</h3>";
  $("body").append(h3);
};
let failure = (xhr, status, exception) => {
  console.log(exception);
};
