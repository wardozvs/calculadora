function addInputs() {
    // Get the values from the input fields
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    // Parse the values as numbers and add them
    const sum = parseFloat(input1) + parseFloat(input2);

    // Display the result
    document.getElementById('result').textContent = sum;
}