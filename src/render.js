export const renderAccount = (accounts) => {
    const tbodyAccount = document.querySelector("#tbodyAccount");

    tbodyAccount.innerHTML = null;
   
    var template = accounts.map((account) => `
        <tr>
            <td class="first">${account.id}</td>
            <td>
                <h5>${account.fullName}</h5>
            </td>
            <td>${account.email}</td>
            <td>${account.phone}</td>
            <td class="last">
                <div class="btn-group">
                    <button id="edit_${account.id}" class="btn-svg">
                        <img class="img-svg" src="./images/edit.svg" alt="">
                    </button>
                    <button id="filt_${account.id}" class="btn-svg">
                        <img class="img-svg" src="./images/delete.svg" alt="">
                    </button>
                </div>
            </td>
        </tr>
    `
    )
    .join("");

    tbodyAccount.innerHTML += template;
    
}

export const renderJournal = (journals, accounts) => {
    const tbodyJournal = document.querySelector("#tbodyJournal");
    const selectCompte = document.querySelector("#compte");

    tbodyJournal.innerHTML = null;
    selectCompte.innerHTML = null;

    var options = accounts.map((account) => `
        <option value="${account.fullName}">${account.fullName}</option>
    `
    )
    .join("");

    selectCompte.innerHTML += `
    <option value="" disabled selected hidden>Choisir un compte</option>
        ${options}
    ` ;


    var template = journals.map((journal) => `
        <tr>
            <td class="first">${journal.id}</td>
            <td>
                <h5>${journal.compte}</h5>
            </td>
            <td>${journal.montant}</td>
            <td class="last">
                <div class="btn-group">
                    <button id="edit_${journal.id}" class="btn-svg">
                        <img class="img-svg" src="./images/edit.svg" alt="">
                    </button>
                    <button id="filt_${journal.id}" class="btn-svg">
                        <img class="img-svg" src="./images/delete.svg" alt="">
                    </button>
                </div>
            </td>
        </tr>
    `
    )
    .join("");

    tbodyJournal.innerHTML += template;
    
}

export const renderExtrait = (journals, accounts, debut, fin, compte) => {
    const tbodyExtrait = document.querySelector("#tbodyExtrait");
    const selectCompteExtrait = document.querySelector("#compte_extrait");
    const totalMontant = document.querySelector("#total_montant");

    tbodyExtrait.innerHTML = null;
    selectCompteExtrait.innerHTML = null;

    var options = accounts.map((account) => `
        <option value="${account.fullName}">${account.fullName}</option>
    `
    )
    .join("");

    selectCompteExtrait.innerHTML += `
    <option value="" disabled selected hidden>Choisir un compte</option>
        ${options}
    ` ;

    extraits = journals.filter((journal) => {
        journal.compte == compte
    });

    let mt = 0;
    var totalMt = 0;

    totalMt = extraits.map((extrait) => {
        mt += extrait.montant;
    });

    totalMontant.innerHTML += `${totalMt}`;

    var template = extraits.map((extrait) => `
        <tr>
            <td>
                <h5>${extrait.compte}</h5>
            </td>
            <td>${extrait.montant}</td>
        </tr>
    `
    )
    .join("");

    tbodyExtrait.innerHTML += template;
    
}