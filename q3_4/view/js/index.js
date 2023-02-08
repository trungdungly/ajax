const submitForm = () => {
  let name = $("#name").val();
  let price = $("#price").val();
  let data = {
    name,
    price,
  };
  console.log(data);
  makePostCall(data);
};
const makePostCall = (data) => {
  $.post({
    url: "/addToCart",
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
  })
    .done(success)
    .fail(failure);
};
const success = (data) => {
  console.log("data posted to server" + data);
  alert("Success");
};
const failure = (xhr, status, exception) => {
  console.log(exception);
};

$(() => {
  $("#btn").click(submitForm);
});
