<?php
//FORMULARZ ODPOWIADA ZA DZIAŁANIE NA STRONIE GŁÓWNEJ

// Tworzymy zmienną dla imienia i nazwiska
$name = $_POST['name'];

// Tworzymy zmienną dla adresu email
$email = $_POST['email'];

// Tworzymy zmienną dla wiadomości
$message = $_POST['message'];

// Tworzymy zmienną dla wiadomości
$phone = $_POST['phone'];

// Podajesz adres email z którego ma być wysłana wiadomość
$odkogo = "email";

// Podajesz adres email na który chcesz otrzymać wiadomość
$dokogo = "k.gradek@ernabo.pl";

// Podajesz tytuł jaki ma mieć ta wiadomość email
$tytul = "Formularz kontaktowy serwis komputerów";

// Przygotowujesz treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Imie i nazwisko: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";

// Wysyłamy wiadomość
$sukces = mail($dokogo, $tytul, $wiadomosc, "Od: <$odkogo>");

// Przekierowywujemy na potwierdzenie
if ($sukces){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=index_ok.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=index_blad.html\">";
}
?>