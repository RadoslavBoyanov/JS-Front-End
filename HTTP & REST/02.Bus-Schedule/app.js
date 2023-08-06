function solve() {
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const busInfoBox = document.querySelector('#info .info');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';

    let busStopInfo = {
        name: '',
        next: 'depot'
    }

    function updateStopInfo(departButtonState, arriveButtonState, textContent) {
        departButton.disabled = departButtonState;
        arriveButton.disabled = arriveButtonState;
        busInfoBox.textContent = textContent;
    }

    function depart() {
        fetch(`${BASE_URL}${busStopInfo.next}`)
            .then((res) => res.json())
            .then((busStop) => {
                busStopInfo = busStop;
                updateStopInfo(true, false, `Next stop ${busStopInfo.name}`);
            })
            .catch(() => {
                departButton.disabled = true;
                arriveButton.disabled = true;
                busInfoBox.textContent = 'Error';
            })
    }

    async function arrive() {
        updateStopInfo(false, true, `Arriving at ${busStopInfo.name}`);
    }

    return {
        depart,
        arrive
    };
}

let result = solve();