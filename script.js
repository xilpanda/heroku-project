// script.js fajl

// URL vašeg API endpoint-a
const apiUrl = "https://cors-anywhere.herokuapp.com/https://55b1-31-223-131-30.ngrok-free.app/pipelines";

// Funkcija za preuzimanje podataka sa API-ja
async function fetchPipelines() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Proverite podatke u konzoli

        // Funkcija za prikazivanje podataka u tabeli
        displayPipelines(data);
    } catch (error) {
        console.error("Error fetching pipelines:", error);
    }
}

// Funkcija za prikazivanje podataka u tabeli
function displayPipelines(pipelines) {
    const tableBody = document.getElementById("pipelineTableBody");
    tableBody.innerHTML = ""; // Očistite prethodne podatke

    pipelines.forEach((pipeline) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${pipeline.id || "N/A"}</td>
            <td>${pipeline.name || "N/A"}</td>
            <td>${pipeline.repo || "N/A"}</td>
            <td>${pipeline.branch || "N/A"}</td>
            <td>${pipeline.triggerTime || "N/A"}</td>
            <td>${pipeline.status || "N/A"}</td>
            <td>${pipeline.lastExecution || "N/A"}</td>
            <td>${pipeline.duration || "N/A"}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Automatski pozovite funkciju za preuzimanje podataka kada se stranica učita
document.addEventListener("DOMContentLoaded", fetchPipelines);
