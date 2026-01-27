

document.getElementById("dobrodosliDugme").addEventListener('click', function(){
    window.location.href = "/kod/obavezan-deo/html/o-nama.html";
});

const slajdovi = document.querySelectorAll(".zaglavlje-kontejner");
const dugmeSledece = document.getElementById("sledece");
const dugmePrethodno = document.getElementById("prethodno");

let trenutniIndex = 0;

function prikaziSlajd(index){
    slajdovi.forEach(slajd => {
        slajd.classList.remove("aktivan");
    });

    slajdovi[index].classList.add("aktivan");
}

dugmeSledece.addEventListener("click", () => {
    trenutniIndex++;

    if(trenutniIndex >= slajdovi.length) {
        trenutniIndex = 0;
    }

    prikaziSlajd(trenutniIndex);
})

dugmePrethodno.addEventListener("click", () => {
    trenutniIndex--;

    if(trenutniIndex < 0) {
        trenutniIndex = slajdovi.length - 1;
    }

    prikaziSlajd(trenutniIndex);
})

