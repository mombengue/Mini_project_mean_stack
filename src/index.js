import { renderAccount, renderJournal, renderExtrait } from "./render"
import Model from "./models/model"

const home = document.querySelector("#home");
const jounal = document.querySelector("#journal");
const extrait = document.querySelector("#extrait");

const homeTemplate = document.querySelector("#home_template");
const jounalTemplate = document.querySelector("#journal_template");
const extraitTemplate = document.querySelector("#extrait_template");

home.addEventListener("click", function(event) {
    home.classList.add("active"); 
    jounal.classList.remove("active");
    extrait.classList.remove("active");

    homeTemplate.style.display = "block";
    jounalTemplate.style.display = "none";
    extraitTemplate.style.display = "none";
});

jounal.addEventListener("click", function(event) { 
    home.classList.remove("active"); 
    jounal.classList.add("active");
    extrait.classList.remove("active");

    homeTemplate.style.display = "none";
    jounalTemplate.style.display = "block";
    extraitTemplate.style.display = "none";
});

extrait.addEventListener("click", function(event) { 
    home.classList.remove("active"); 
    jounal.classList.remove("active");
    extrait.classList.add("active");

    homeTemplate.style.display = "none";
    jounalTemplate.style.display = "none";
    extraitTemplate.style.display = "block";
});

let accounts = new Model([], "accounts");
let journals = new Model([], "journals");

renderAccount(accounts.getModels());
renderJournal(journals.getModels(), accounts.getModels());
renderExtrait(journals.getModels(), accounts.getModels(), " ", " ", " ");

const formAccount = document.querySelector('#formAccount');
const formJournal = document.querySelector('#formJournal');
const formExtrait = document.querySelector('#formExtrait');

formAccount.addEventListener("submit", function(e) {
    e.preventDefault();

    const account = {
        id : accounts.models.length + 1,
        fullName : document.querySelector("#fullName").value,
        email : document.querySelector("#email").value,
        phone : document.querySelector("#phone").value,
        address : document.querySelector("#address").value
    };

    accounts.add(account);

    renderAccount(accounts.getModels());
});

formJournal.addEventListener("submit", function(e) {
    e.preventDefault();

    const journal = {
        id : journals.models.length + 1,
        compte : document.querySelector("#compte").value,
        montant : document.querySelector("#montant").value,
    };

    journals.add(journal);

    renderJournal(journals.getModels(), accounts.getModels());
});

formExtrait.addEventListener("submit", function(e) {
    e.preventDefault();

    dateDebut = document.querySelector("#date_debut").value
    dateFin = document.querySelector("#date_fin").value
    compte = document.querySelector("#compte_extrait").value

    renderExtrait(journals.getModels(), accounts.getModels(), dateDebut, dateFin, compte);
});



