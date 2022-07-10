function solve() {
    const url = 'http://localhost:3030/jsonstore/bus/schedule/';
    let lastStop = {};
    let currentStopId = '1567';
    const infoDiv = document.getElementById('info');
    const buttons = document.querySelectorAll('input');


    function depart() {
        const messageDepart = 'Next stop ';
        currentStopId = lastStop.next || currentStopId;
        render(messageDepart);
    }

    function arrive() {
        const massageArrive = 'Arriving at ';
        render(massageArrive);
    }

    function render(message) {
        fetch(url + currentStopId)
            .then(response => response.json())
            .then(data => {
                lastStop = data;
                infoDiv.textContent = message + data.name;
                toggleButtons();
            })
            .catch(err => {
                infoDiv.textContent = 'Error';
                buttons.forEach(button => button.setAttribute('disabled', true));
            });
    }

    function toggleButtons() {
        buttons.forEach(button => {
            if (button.hasAttribute('disabled')) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', true);
            }
        });
    }


    return {
        depart,
        arrive
    };
}

let result = solve();