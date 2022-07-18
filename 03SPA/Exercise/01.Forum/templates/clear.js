export function clear(inputs) {
    inputs.forEach(i => {
        i.value = '';
        i.placeholder = '';
    });
}