 // ---------- PROBLEM : COMPOUNDING INTEREST ----------
// Each year their investment will increase by their 
// investment + their investment * the interest rate
 
// This function returns the year end new value 
// depending on a changing interest rate
// Account Value = Principle(1 + rate)^years
 
function getAccountValue(principal, interestRate, afterYear) {
    return (principal*(Math.pow(1 + interestRate, afterYear))).toFixed(2);
}
 
 
function getTable(){
 
    // Get the requested interest rates and convert to
    // percents for calculations
    let rate1 = document.getElementById("rate1").value * .01;
    let rate2 = document.getElementById("rate2").value * .01;
    let rate3 = document.getElementById("rate3").value * .01;
    let rate4 = document.getElementById("rate4").value * .01;
 
    // Calculate 5 years of returns for each rate
    let return1 = [...Array(5).keys()].map(x => getAccountValue(1, rate1, x));
    let return2 = [...Array(5).keys()].map(x => getAccountValue(1, rate2, x));
    let return3 = [...Array(5).keys()].map(x => getAccountValue(1, rate3, x));
    let return4 = [...Array(5).keys()].map(x => getAccountValue(1, rate4, x));
 
    // Get the div to put the table in
    var tablearea = document.getElementById('interest-tbl');
 
    // Create a table element
    var investTable = document.createElement('table');
 
    // Add class to table element
    investTable.setAttribute('class', 'table table-striped');
 
    // Create header
    // <thead>
    //      <tr>
    //          <th>
    var thead = document.createElement('thead');
    var theadTR = document.createElement('tr');
    // Create th elements
    var th1 = theadTR.appendChild(document.createElement('th'));
    var th2 = theadTR.appendChild(document.createElement('th'));
    var th3 = theadTR.appendChild(document.createElement('th'));
    var th4 = theadTR.appendChild(document.createElement('th'));
    var th5 = theadTR.appendChild(document.createElement('th'));
 
    // Convert back to regular rate and place in th
    th1.innerHTML = 'Year';
    th2.innerHTML = Math.floor((rate1 * 100)) + '%';
    th3.innerHTML = Math.floor((rate2 * 100)) + '%';
    th4.innerHTML = Math.floor((rate3 * 100)) + '%';
    th5.innerHTML = Math.floor((rate4 * 100)) + '%';
 
    // Add th elements to tr element
    theadTR.prepend(th1, th2, th3, th4, th5);
    // Add tr to thead
    thead.appendChild(theadTR);
 
    // <tbody>
    //      <tr>
    //          <th>
    var tbody = document.createElement('tbody');
    for (var i = 1; i < 5; i++){
        var tbodyTR = document.createElement('tr');  
 
        var tbodyth1 = tbodyTR.appendChild(document.createElement('th'));
        var tbodyth2 = tbodyTR.appendChild(document.createElement('th'));
        var tbodyth3 = tbodyTR.appendChild(document.createElement('th'));
        var tbodyth4 = tbodyTR.appendChild(document.createElement('th'));
        var tbodyth5 = tbodyTR.appendChild(document.createElement('th'));
 
        tbodyth1.innerHTML = i;
        tbodyth2.innerHTML = return1[i];
        tbodyth3.innerHTML = return2[i];
        tbodyth4.innerHTML = return3[i];
        tbodyth5.innerHTML = return4[i];
 
        tbodyTR.prepend(tbodyth1, tbodyth2, tbodyth3, tbodyth4, tbodyth5);
        tbody.appendChild(tbodyTR);
 
    }
    investTable.appendChild(thead);
    investTable.appendChild(tbody);
    var tableDiv = document.getElementById("interest-tbl");tableDiv.appendChild(investTable);
}