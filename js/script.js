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