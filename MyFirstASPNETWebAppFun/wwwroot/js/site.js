// Write your JavaScript code.

$(document).ready(function () {
    $('#btnCalculate').click(function () {
        var hours = parseFloat($('#hours').val());
        var hourlyRate = parseFloat($('#hourly-rate').val().substring(1)); // Remove the dollar sign and convert to float
        var total = hours * hourlyRate;

        if (!isNaN(total) && total > 0) {
            $('#total').text('$' + total.toFixed(2));
        } else {
            alert('Please enter a valid number of hours.');
        }
    });
});