function addInputs() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const sum = parseFloat(num1) + parseFloat(num2);

    document.getElementById('result').textContent = sum;
}

function substractNumbers(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const subs = parseFloat(num1) - parseFloat(num2);

    document.getElementById('result').textContent = subs;
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
