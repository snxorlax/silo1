const buttonAbh = document.getElementById("abh-btn");
const buttonBanterok = document.getElementById("banterok-btn");
const buttonDragon = document.getElementById("dragon-btn");
const buttonDragonborn = document.getElementById("dragonborn-btn");
const buttonHeartbeat = document.getElementById("heartbeat-btn");
const buttonOpera = document.getElementById("opera-btn");
const buttonParadigm = document.getElementById("paradigm-btn");
const buttonSilo = document.getElementById("silo-btn");
const buttonColdRow = document.getElementById("coldrow-btn");

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
buttonHeartbeat.addEventListener(
	"click",
	() => showLore("lorepages/heartbeat.html"),
);
buttonColdRow.addEventListener(
	"click",
	() => showLore("lorepages/coldrow.html"),
);
buttonOpera.addEventListener(
	"click",
	() => showLore("lorepages/opera.html"),
);
buttonBanterok.addEventListener(
	"click",
	() => showLore("lorepages/banterok.html"),
);
buttonParadigm.addEventListener(
	"click",
	() => showLore("lorepages/paradigm.html"),
);
