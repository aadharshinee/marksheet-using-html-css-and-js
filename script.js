function calculateTotal(index) {
    var theory = document.getElementById('theory' + index).value;
    var practical = document.getElementById('practical' + index).value;
    var total = parseInt(theory) + parseInt(practical);
    document.getElementById('total' + index).innerHTML = total;
    document.getElementById('totalWords' + index).innerHTML = convertToWords(total);
    calculateGrandTotal();
}

function calculateGrandTotal() {
    var grandTotal = 0;
    for (var i = 1; i <= 5; i++) {
        var total = document.getElementById('total' + i).innerHTML;
        grandTotal += parseInt(total);
    }
    document.getElementById('grandTotal').innerHTML = grandTotal;
    document.getElementById('grandTotalWords').innerHTML = convertToWords(grandTotal);
    calculateResult(grandTotal);
}

function calculateResult(grandTotal) {
    var percentage = (grandTotal / 500) * 100;
    document.getElementById('percentage').innerHTML = percentage.toFixed(2) + '%';
    var grade = getGrade(percentage);
    document.getElementById('grade').innerHTML = grade;
    var result = grandTotal >= 250 ? 'PASS' : 'FAIL';
    document.getElementById('result').innerHTML = result;
}
function getGrade(percentage) {
    if (percentage >= 90) return 'A';
    else if (percentage >= 80) return 'B';
    else if (percentage >= 70) return 'C';
    else if (percentage >= 60) return 'D';
    else return 'F';
}

function convertToWords(num) {
    var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    var tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    if (num < 20) return words[num];
    else if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 != 0 ? ' ' + words[num % 10] : '');
    else if (num < 1000) return words[Math.floor(num / 100)] + ' Hundred' + (num % 100 != 0 ? ' ' + convertToWords(num % 100) : '');
    else return 'Number out of range';
}