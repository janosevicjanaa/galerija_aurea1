function postaviKolacic(ime, vrednost, dani) {
    const datum = new Date();
    datum.setTime(datum.getTime() + (dani*24*60*60*1000));
    document.cookie = `${ime}=${vrednost}; expires=${datum.toUTCString()}; path=/`;
}

function uzmiKolacic(ime) {
    const kolacici = document.cookie.split(';');

    for(let i=0; i<kolacici.length; i++){
        let k=kolacici[i].trim();
        if (k.indexOf(ime + "=")===0){
            return k.substring((ime+"=").length);
        }
    }
    return null;
}

function obrisiKolacic(ime) {
    document.cookie = `${ime}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}