function addInputs() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    const sum = parseFloat(input1) + parseFloat(input2);

    document.getElementById('result').textContent = sum;
}