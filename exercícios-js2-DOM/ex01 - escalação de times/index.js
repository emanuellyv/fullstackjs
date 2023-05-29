// variáveis globais
const inputsPlayers = document.getElementById('inputsPlayers');

const playersList = document.getElementById('playersList');

const divPosition = document.getElementById('divPosition');
const divPlayerName = document.getElementById('divPlayerName');
const divNumber = document.getElementById('divNumber');

const divPlayerRemove = document.getElementById('numberRemove');

const defaultButtons = document.getElementById('defaultButtons');
const buttonAddPlayer = document.getElementById('buttonAddPlayer');
const buttonRemovePlayer = document.getElementById('buttonRemovePlayer');
const buttonShowLine = document.getElementById('buttonShowLine');

const buttonsConfirm = document.getElementById('buttonsConfirm');

function addPlayer () {
    divPosition.innerHTML = "<label id='labelPosition' for='position'>Posição: </label>";
    const inputPosition = document.createElement('input');
    inputPosition.type = 'text';
    inputPosition.id = 'position';
    inputPosition.name = 'position';
    divPosition.append(inputPosition);

    divPlayerName.innerHTML = "<label id='labelPlayerName' for='playerName'>Nome: </label>";
    const inputPlayerName = document.createElement('input');
    inputPlayerName.type = 'text';
    inputPlayerName.id = 'playerName';
    inputPlayerName.name = 'playerName';
    divPlayerName.append(inputPlayerName);

    divNumber.innerHTML = "<label id='labelNumber' for='number'>Número da camisa: </label>";
    const inputNumber = document.createElement('input');
    inputNumber.type = 'number';
    inputNumber.id = 'number';
    inputNumber.name = 'number';
    divNumber.append(inputNumber);

    inputsPlayers.append(divPosition, divPlayerName, divNumber);

    buttonAddPlayer.style.display = "none";
    buttonRemovePlayer.style.display = "none";
    buttonShowLine.style.display = "none";

    const buttonConfirmPlayer = document.getElementById('buttonConfirm');
    buttonConfirmPlayer.innerHTML = "<button id='confirmPlayer' onclick='confirmPlayer()'>Confirmar</button>";
    const buttonCancelPlayer = document.getElementById('buttonCancel');
    buttonCancelPlayer.innerHTML = "<button id='cancelPlayer' onclick='cancelPlayer()'>Voltar</button>";
}

function confirmPlayer () {
    const inputPosition = document.getElementById('position');
    const inputPlayerName = document.getElementById('playerName');
    const inputNumber = document.getElementById('number');

    let newPlayer = {};

    let confirmPlayer = confirm("Você tem certeza que deseja escalar o jogador " + inputPlayerName.value + "?");

    if (confirmPlayer) {
        newPlayer.position = inputPosition.value;
        newPlayer.namePlayer = inputPlayerName.value;
        newPlayer.number = inputNumber.value;

        players.push(newPlayer);

        alert("O jogador " + inputPlayerName.value + " foi escalado com sucesso!");
    } else {
        alert("Você cancelou a escalação do jogador " + inputPlayerName.value + "!");
    }

    inputPosition.value = "";
    inputPlayerName.value = "";
    inputNumber.value = "";
}

function cancelPlayer () {
    const labelPosition = document.getElementById('labelPosition');
    const inputPosition = document.getElementById('position');
    const labelPlayerName = document.getElementById('labelPlayerName');
    const inputPlayerName = document.getElementById('playerName');
    const labelNumber = document.getElementById('labelNumber');
    const inputNumber = document.getElementById('number');

    labelPosition.remove();
    inputPosition.remove();
    labelPlayerName.remove();
    inputPlayerName.remove();
    labelNumber.remove();
    inputNumber.remove();

    const confirmPlayer = document.getElementById('confirmPlayer');
    const cancelPlayer = document.getElementById('cancelPlayer');

    confirmPlayer.remove();
    cancelPlayer.remove();

    buttonAddPlayer.style.display = "inline-block";
    buttonRemovePlayer.style.display = "inline-block";
    buttonShowLine.style.display = "inline-block";
}

function removePlayer () {
    divPlayerRemove.innerHTML = "<label id='labelNumber' for='number'>Número da camisa do jogador que deseja remover: </label>";
    let inputNumber = document.createElement('input');
    inputNumber.type = 'number';
    inputNumber.id = 'number';
    inputNumber.name = 'number';
    divPlayerRemove.append(inputNumber);
    inputsPlayers.append(divPlayerRemove);

    const buttonRemove = document.getElementById('buttonRemove');
    buttonRemove.innerHTML = "<button id='removePlayer' onclick='removePlayerConfirm()'>Remover</button>";
    const buttonCancelPlayer = document.getElementById('buttonCancel');
    buttonCancelPlayer.innerHTML = "<button id='cancelPlayer' onclick='removePlayerCancel()'>Voltar</button>";

    buttonRemove.style.display = "inline-block";
    buttonCancelPlayer.style.display = "inline-block";

    buttonAddPlayer.style.display = "none";
    buttonRemovePlayer.style.display = "none";
    buttonShowLine.style.display = "none";
}

function removePlayerConfirm () {
    let inputNumber = document.getElementById('number');
    let numberRemove = inputNumber.value;

    for (let i = 0; i < players.length; i++) {
        if (players[i].number == numberRemove) {
            let namePlayer = players[i].namePlayer;

            let confirmRemove = confirm(
                "Você tem certeza que deseja remover o jogador " + namePlayer + " da escalação?"
            );

            if (confirmRemove) {
                players.splice(i, 1);

                alert("Jogador " + namePlayer + " removido com sucesso!");
                inputNumber.value = "";
                break;
            } else {
                alert("Jogador " + namePlayer + " não foi removido!");
            }
            break;
        }
    }
}

function removePlayerCancel () {
    const labelPlayerRemove = document.getElementById('labelNumber');
    const inputPlayerRemove = document.getElementById('number');
    const buttonRemove = document.getElementById('buttonRemove');
    const buttonCancelPlayer = document.getElementById('buttonCancel');

    buttonAddPlayer.style.display = "inline-block";
    buttonRemovePlayer.style.display = "inline-block";
    buttonShowLine.style.display = "inline-block";
    buttonRemove.style.display = "none";
    buttonCancelPlayer.style.display = "none";
    labelPlayerRemove.style.display = "none";
    inputPlayerRemove.style.display = "none";
}

function showLine () {
    const buttonCancelShowLine = document.getElementById('buttonCancel');
    buttonCancelShowLine.innerHTML = "<button id='showLineCancel' onclick='showLineCancel()'>Voltar</button>";;

    const lineTitle = document.createElement('h3');
    lineTitle.id = 'lineTitle';
    lineTitle.innerText = "Escalação atual";
    buttonCancelShowLine.style.display = "inline-block";

    playersList.append(lineTitle);

    const playersListLine = document.createElement('div');
    playersListLine.id = "playersListLine";

    for (let i = 0; i < players.length; i++) {
        const listPlayer = document.createElement('ul');
        listPlayer.className = "allList";
        const playerName = document.createElement('li');
        const playerPosition = document.createElement('li');
        const playerNumber = document.createElement('li');

        playerName.innerText = "Nome: " + players[i].namePlayer;
        playerPosition.innerText = "Posição: " + players[i].position;
        playerNumber.innerText = "Número da camisa: " + players[i].number;

        listPlayer.append(playerName, playerPosition, playerNumber);
        playersListLine.append(listPlayer);
    }
    playersList.append(playersListLine);

    buttonAddPlayer.style.display = "none";
    buttonRemovePlayer.style.display = "none";
    buttonShowLine.style.display = "none";

}

function showLineCancel () {
    const lineTitle = document.getElementById('lineTitle');
    const buttonCancelShowLine = document.getElementById('showLineCancel');
    const playersListLine = document.getElementById('playersListLine');

    buttonAddPlayer.style.display = "inline-block";
    buttonRemovePlayer.style.display = "inline-block";
    buttonShowLine.style.display = "inline-block";
    lineTitle.remove();
    buttonCancelShowLine.style.display = "none";
    playersListLine.remove();
}