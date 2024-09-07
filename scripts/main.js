const buttonDragon = document.getElementById("dragon-btn");
const buttonDragonborn = document.getElementById("dragonborn-btn");
const buttonAbh = document.getElementById("abh-btn");
const buttonSilo = document.getElementById("silo-btn");

const lore = document.getElementById("lore");

function showLore(subject) {
	const xhr = new XMLHttpRequest();
	xhr.onload = function () {
		lore.innerHTML = this.responseText;
	};

	xhr.open("GET", subject, true);
	xhr.send();
}

buttonDragon.addEventListener(
	"click",
	() => showLore("lorepages/dragons.html"),
);
buttonDragonborn.addEventListener(
	"click",
	() => showLore("lorepages/dragonborn.html"),
);
buttonAbh.addEventListener(
	"click",
	() => showLore("lorepages/abriefhistory.html"),
);
buttonSilo.addEventListener(
	"click",
	() => showLore("lorepages/silos.html"),
);
