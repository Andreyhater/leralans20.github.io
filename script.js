function send_email(choise_key, choise_val){
    const result = "Selected button: " + choise_key + " (" + choise_val + ")"

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "andrew0999@hotmail.com",
        Password : "5b0d21de-a0e8-4a80-bdaa-660b8c5b075f",
        To : 'andrew0999@yandex.ru',
        From : "andrew0999@hotmail.com",
        Subject : "She answered!",
        Body : result
    }).then(
        message => console.log(message),
        $("#result").removeClass("disabled"),
        $("#action").addClass("disabled")
    );
}

$(() => {
   $("#password_button").click( function () {
       if ($("#key").val().toLowerCase() === "сдрбогиня"){
           $("#password").addClass("disabled")
           $("#action").removeClass("disabled")
       }
   })

    $("#walk_button").click(function () { send_email("1", "что-то посмотреть") })
    $("#eat_button").click(function () { send_email("2", "что-то покушать") })
    $("#game_button").click(function () { send_email("3", "чем-то заняться") })


});