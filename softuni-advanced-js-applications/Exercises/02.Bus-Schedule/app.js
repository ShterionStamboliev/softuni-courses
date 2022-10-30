function solve() {
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const info = document.getElementById('info').children[0];
    let stopId = 'depot';
    let stopName = undefined;

   async function depart() {
    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`);
        const data = await response.json();
        stopId = data.next;
        stopName = data.name;
        info.textContent = `Next stop: ${stopName}`;
        departButton.disabled = true;
        arriveButton.disabled = false;
    } catch (err) {
        info.textContent = 'Error';
        departButton.disabled = false;
        arriveButton.disabled = false;
    }
}

    function arrive() {
        info.textContent = `Arriving at ${stopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();