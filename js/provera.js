function brojevi(niz){
    for(i in niz){
        if(niz[i] >= '0' && niz[i] <= '9'){
            continue;
        }else{
            return false;
        }
    }
    return true;
}
function kontakt_provera(){
    var kontakt = document.getElementById('number').value;
    if(kontakt.length != 13 || !brojevi(kontakt)){
        greska.innerHTML = "Neispravan telefon";
        return false;
    }
    klijent.kontakt = kontakt;
    return true;
}
function ime_provera(){
            var ime = document.getElementById('fullname').value;
            if(ime.trim().length == 0 || ime.indexOf(' ') == -1){
                greska.innerHTML = 'Neispravno uneto ime i prezime';
                return false;
            }
            for(i=0;i<ime.length;i++){
                if(ime[i] != " "){
                    if(ime[i].toUpperCase() == ime[i].toLowerCase()){
                        greska.innerHTML = 'Neslovni karakteri u imenu i prezimenu';
                        return false;
                    }
                }
            }
            klijent.ime = ime;
            return true;
        }
function provera_emaila() {
            var email = document.getElementById("email").value.match("/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/");
        
            if (email.trim().length == 0) {
                greska.innerHTML = "Unesite isprava email";
                return false;
            }
            klijent.email = email;
            return true;
        }
function provera_teksta() {
            var tekst = document.getElementById("tekst").value;
        
            if (tekst.trim().length == 0) {
                greska.innerHTML = "Unesite tekst poruke";
                return false;
            }
            klijent.tekst = tekst;
            return true;
        }
function provera(){
            if(ime_provera() && kontakt_provera() && provera_emaila()  && provera_teksta()){
                alert("Hvala sto nam pisete");
                return true;
            }
            return false;
        }