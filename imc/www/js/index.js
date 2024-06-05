function calculerImc() {
  const poids = parseFloat(document.getElementById("poids").value);
  const taille = parseFloat(document.getElementById("taille").value);
  const errorMessage = document.getElementById("error-message");
  const interpretation = document.getElementById("interpretation");
  const resultatFieldset = document.getElementById("resultat");

  if (isNaN(poids) || isNaN(taille) || poids <= 0 || taille <= 0) {
    errorMessage.textContent =
      "Veuillez entrer des valeurs valides pour le poids et la taille.";
    resultatFieldset.hidden = true;
  } else {
    const imc = poids / (taille * taille);
    let interpretationText = "";

    if (imc < 18.5) {
      interpretationText = "Insuffisance pondérale (maigreur)";
    } else if (imc < 25) {
      interpretationText = "Corpulence normale";
    } else if (imc < 30) {
      interpretationText = "Surpoids";
    } else if (imc < 35) {
      interpretationText = "Obésité modérée";
    } else if (imc < 40) {
      interpretationText = "Obésité sévère";
    } else {
      interpretationText = "Obésité morbide ou massive";
    }

    errorMessage.textContent = "";
    interpretation.textContent = `Votre IMC est de ${imc.toFixed(
      2
    )}. ${interpretationText}`;
    resultatFieldset.hidden = false;
  }
}