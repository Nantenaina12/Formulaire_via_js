let utilisateurs=[];
let form = document.querySelector("form");
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let mail = document.getElementById("mail");
let pw = document.getElementById("mtp");
let cont = document.getElementById("cont");
form.addEventListener("submit", function(e) {
    e.preventDefault();

  // Validation
  if (nom.value.trim() === "" || prenom.value.trim() === "") {
    alert("Le nom et prénom sont requis.");
  } else if (!mail.value.includes("@")) {
    alert("L'email doit contenir '@'.");
  } else if (pw.value.length < 6) {
    alert("Le mot de passe doit contenir au moins 6 caractères.");
  } else {
    // Création d'un objet utilisateur
    let utilisateur = {
        nom: nom.value.trim(),
        prenom: prenom.value.trim(),
        email: mail.value.trim(),
        motdepasse: pw.value
  };

    // Ajouter dans le tableau
    utilisateurs.push(utilisateur);

    cont.innerHTML = `
      <h3>Utilisateur ajouté:</h3>
      <p>Nom : ${nom.value}</p>
      <p>Prénom : ${prenom.value}</p>
      <p>Email : ${mail.value}</p>
    `;
    cont.style.marginTop = "20px";
    cont.style.color = "black";
  }
  form.reset();
  console.log(utilisateurs);
});
