// Write your JavaScript code.

$(document).ready(function () {
/* create a function that starts when the button is clicked*/
    $('#btnCalculate').click(function () {
/*set the variables with the ids on the page*/
        var hours = parseFloat($('#hours').val());
        var hourlyRate = parseFloat($('#hourly-rate').val().substring(1)); 
        var total = hours * hourlyRate;

/*if the total is a valid number, send the output with the total amount*/
        if (!isNaN(total) && total > 0) {
            $('#total').text('$' + total.toFixed(2));
        } else {
            alert('Please enter a valid number of hours.');
        }
    });
});