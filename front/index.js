fetch("http://localhost:3000/api/health")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("backend-status").textContent = data.message;
  })
  .catch((error) => {
    document.getElementById("backend-status").textContent =
      "Erreur de connexion au backend";
    console.error(error);
  });
