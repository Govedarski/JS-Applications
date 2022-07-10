// function getInfo() {
//     const stopId = document.getElementById('stopId').value;
//     const stopNameDiv = document.getElementById('stopName');
//     const busesList = document.getElementById('buses');
//
//     fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
//         .then(response => response.json())
//         .then(data => renderInfo(data.name, data.buses))
//         .catch(err => renderInfo('Error'));
//
//     function renderInfo(name, buses) {
//         stopNameDiv.textContent = name;
//         const wrapper = new DocumentFragment();
//         if (buses) {
//             Object.entries(buses)
//                 .map(([number, time]) => `Bus ${number} arrives in ${time} minutes`)
//                 .forEach(text => {
//                     const element = document.createElement('li');
//                     element.textContent = text;
//                     wrapper.appendChild(element);
//                 });
//         }
//         busesList.replaceChildren(wrapper);
//     }
// }

async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopNameDiv = document.getElementById('stopName');
    const busesList = document.getElementById('buses');

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
        const data = await response.json();
        renderInfo(data.name, data.buses);
    } catch {
        renderInfo('Error');
    }

    function renderInfo(name, buses) {
        stopNameDiv.textContent = name;
        const wrapper = new DocumentFragment();
        if (buses) {
            Object.entries(buses)
                .map(([number, time]) => `Bus ${number} arrives in ${time} minutes`)
                .forEach(text => {
                    const element = document.createElement('li');
                    element.textContent = text;
                    wrapper.appendChild(element);
                });
        }
        busesList.replaceChildren(wrapper);
    }
}