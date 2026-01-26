fetch("/kod/obavezan-deo/html/navigacija.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navigacija").innerHTML = data;

    
    const tamnaDugme = document.querySelectorAll(".tamna");
    const svetlaDugme = document.querySelectorAll(".svetla");

    const sacuvanaTema = uzmiKolacic("tema");
    if(sacuvanaTema === "tamna"){
        document.body.classList.add("promeni-temu");
    }

    tamnaDugme.forEach(dugme => {
        dugme.addEventListener("click", () => {
            document.body.classList.add("promeni-temu");
            postaviKolacic("tema", "tamna", "30");
        });
    })

    svetlaDugme.forEach(dugme => {
        dugme.addEventListener("click", () => {
            document.body.classList.remove("promeni-temu");
            postaviKolacic("tema", "svetla", "30");
        });
    })
    

    const hamburgerMeni = document.querySelector(".hamburger-meni");
    const hamburgerMeniSadrzaj = document.querySelector(".hamburger-meni-sadrzaj");

    hamburgerMeni.addEventListener('click', () => {
    hamburgerMeni.classList.toggle('aktivan');
    hamburgerMeniSadrzaj.classList.toggle('aktivan');
    document.body.classList.toggle('zakljucaj-skrol');
    
    });
});



fetch("/kod/obavezan-deo/html/newsletter.html")
.then(response => response.text())
.then(data => {

    const newsletter = document.getElementById("newsletter");
    if(!newsletter) return;

    newsletter.innerHTML = data;
    

    const prijavljen = uzmiKolacic("newsletter");
    const forma = document.getElementById("newsletter-forma");

    function odjaviSe(){
        const odjaviSeDugme = document.getElementById("odjaviSeDugme");
        if(odjaviSeDugme){
            odjaviSeDugme.addEventListener("click", ()=>{
            obrisiKolacic("newsletter");
            location.reload();
            });
        }
    }
    


    if(prijavljen === "true"){
        forma.innerHTML = `
        <p class="newsletter-poruka">Hvala Vam što ste se prijavili na naš Newsletter!</p>
        <button class="posaljite" id="odjaviSeDugme" type="button">Odjavi se</button>`;
        odjaviSe();
        return;
    }

    


    if(forma){
        forma.addEventListener("submit", (e) => {
            e.preventDefault();

            const emailInput = forma.querySelector("#email");
            if(!emailInput) return;

            const emailUnos = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!emailRegex.test(emailUnos)){
                alert("Molimo unesite validnu email adresu!")
                return;
            }

            postaviKolacic("newsletter", "true", 30);
            forma.innerHTML = `
            <p class="newsletter-poruka">Hvala Vam što ste se prijavili na naš Newsletter!</p>
            <button class="posaljite" id="odjaviSeDugme" type="button" >Odjavi se</button>`;
            odjaviSe();
        });
    }
});

fetch("/kod/obavezan-deo/html/podnozje.html")
.then(response => response.text())
.then(data => {
    document.getElementById("podnozje").innerHTML = data;
});

const kontaktForma = document.getElementById("kontakt-forma");

if(kontaktForma){
    kontaktForma.addEventListener("submit", (e) => {
        e.preventDefault();

        const poruka = document.getElementById("poruka").value.trim();
        const email = document.getElementById("kontakt-email").value.trim();
        const ime = document.getElementById("ime").value.trim();

        if(ime.length < 2 ){
            alert("Molimo unesite Vaše ime (minimum 2 karaktera).");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){
            alert("Molimo unesite validnu email adresu!");
            return;
        }

        if(poruka.length === 0){
            alert("Molimo unesite Vašu poruku!");
            return;
        }

        alert("Vaša poruka je poslata!");

        window.location.reload();
    });
}