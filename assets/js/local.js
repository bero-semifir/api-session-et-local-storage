let todoListe = [];

const listeDOM = document.querySelector("ul#liste");
const formulaire = document.querySelector("#formulaire");
const todoInput = document.querySelector("#tache");
const resetButton = document.querySelector("#reset");

/**
 * Génératon d'une liste dans un noeud DOM
 * @param {string[]} liste taches à faire
 * @param {Element} noeud où générer la liste
 */
const raffraichirListe = (liste, noeud) => {

    noeud.innerHTML = "";

    liste.forEach((tache) => {
        const listItem = document.createElement("li");
        listItem.innerText = tache;
        noeud.appendChild(listItem);
    })
}

/**
 * Ajouter une tache à la liste
 * @param {string} tache Tache à inserer dans la liste
 */
const addTache = (tache) => {
    if (tache != "") {
        todoListe.push(tache);
    }
}

// Ajout des écouteurs d'événements
formulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    addTache(todoInput.value);
    raffraichirListe(todoListe, listeDOM);
    // sérialisation de la liste
    const listeAsauvegarder = JSON.stringify(todoListe);
    // sauvegarde de la liste
    window.localStorage.setItem("taches", listeAsauvegarder);

    todoInput.value = "";
});

/**
 * Récupérer les taches du Local Storage
 */
const chargerTaches = () => {
    // récupération
    const listeAcharger = window.localStorage.getItem("taches");
    // désérialisation

    /*
        Si je clear (vide) le local storage, la récupération retourne null si la clé n'existe pas.
        Pour résoudre ce problème on passe par une vérif.
    */
    // avec ternaire
    return listeAcharger ? JSON.parse(listeAcharger) : [];

    // // sans ternaire
    // if (listeAcharger) {
    //     todoListe = JSON.parse(listeAcharger);
    // }else{
    //     todoListe = [];
    // }
}

resetButton.addEventListener("click",()=>{
    window.localStorage.clear();
    raffraichirListe([], listeDOM);
});

window.addEventListener("load", () => {
    chargerTaches();
    raffraichirListe(chargerTaches(), listeDOM);
})