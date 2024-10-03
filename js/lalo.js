function addInputs() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    const sum = parseFloat(input1) + parseFloat(input2);

    document.getElementById('result').textContent = sum;
}

function multiInputs() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    const product = parseFloat(input1) * parseFloat(input2); // Multiplicación

    document.getElementById('result').textContent = product;
}

function dividirInputs() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    const product = parseFloat(input1) / parseFloat(input2); // Multiplicación

    document.getElementById('result').textContent = product;
}
