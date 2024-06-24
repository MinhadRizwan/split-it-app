setInterval(totalAmount, 500)

function showInput() {
    document.getElementById('add-input1').style.display = "block";
    document.getElementById('add-input-img1').style.display = "block";
}

function showInput2() {
    document.getElementById('add-input2').style.display = "block";
    document.getElementById('add-input-img2').style.display = "block";
}


function showInput3() {
    document.getElementById('add-input3').style.display = "block";
    document.getElementById('add-input-img3').style.display = "block";
}


function showInput4() {
    document.getElementById('add-input5').style.display = "block";
    document.getElementById('add-input-img5').style.display = "block";
}

var intAmount;
var intAmount2;
var intAmount3;
var intAmount4;

var total;

function showExpense() {
    const amount = document.getElementById('add-input1').value;
    intAmount = Number(amount);
    // console.log(typeof intAmount);

    document.getElementById('expense1').innerHTML = intAmount;
    document.getElementById('add-input1').value = "";
    document.getElementById('add-input1').style.display = "none";
    document.getElementById('add-input-img1').style.display = "none";


    // const userAmount = document.getElementById('expense1').innerHTML;
    // let usersAmount = Number(userAmount);
    // console.log(typeof usersAmount);
    // const total = usersAmount + intAmount;

    // document.getElementById('expense1').innerHTML = total;
}

function addExpense() {
    const userAmount = document.getElementById('expense2').innerHTML;
    let usersAmount = Number(userAmount);
    const user_amount = document.getElementById('expense1').innerHTML;
    let users_amount = Number(user_amount);
    
    total = usersAmount + users_amount;

    document.getElementById('expense2').innerHTML = total;
    document.getElementById('expense1').innerHTML = 0;
    // console.log(total);

    // const averageTotal = document.getElementById('expense2').innerHTML;
    // let intAverageTotal = Number(averageTotal);
    // console.log(intAverageTotal);
    // document.getElementById('total_amount').innerHTML = total;
}


function showExpense2() {
    const amount2 = document.getElementById('add-input2').value;
    intAmount2 = Number(amount2);

    document.getElementById('expense3').innerHTML = intAmount2;
    document.getElementById('add-input2').value = "";
    document.getElementById('add-input2').style.display = "none";
    document.getElementById('add-input-img2').style.display = "none";
}

function addExpense2() {
    const userAmount2 = document.getElementById('expense4').innerHTML;
    let usersAmount2 = Number(userAmount2);
    const user_amount2 = document.getElementById('expense3').innerHTML;
    let users_amount2 = Number(user_amount2);
    
    let total2 = usersAmount2 + users_amount2;

    document.getElementById('expense4').innerHTML = total2;
    document.getElementById('expense3').innerHTML = 0;
}




function showExpense3() {
    const amount3 = document.getElementById('add-input3').value;
    intAmount3 = Number(amount3);

    document.getElementById('expense5').innerHTML = intAmount3;
    document.getElementById('add-input3').value = "";
    document.getElementById('add-input3').style.display = "none";
    document.getElementById('add-input-img3').style.display = "none";
}

function addExpense3() {
    const userAmount3 = document.getElementById('expense6').innerHTML;
    let usersAmount3 = Number(userAmount3);
    const user_amount3 = document.getElementById('expense5').innerHTML;
    let users_amount3 = Number(user_amount3);
    
    let total3 = usersAmount3 + users_amount3;

    document.getElementById('expense6').innerHTML = total3;
    document.getElementById('expense5').innerHTML = 0;
}



function showExpense4() {
    const amount4 = document.getElementById('add-input5').value;
    intAmount4 = Number(amount4);

    document.getElementById('expense7').innerHTML = intAmount4;
    document.getElementById('add-input5').value = "";
    document.getElementById('add-input5').style.display = "none";
    document.getElementById('add-input-img5').style.display = "none";

}

function addExpense4() {
    const userAmount4 = document.getElementById('expense8').innerHTML;
    let usersAmount4 = Number(userAmount4);
    const user_amount4 = document.getElementById('expense7').innerHTML;
    let users_amount4 = Number(user_amount4);
    
    let total4 = usersAmount4 + users_amount4;

    document.getElementById('expense8').innerHTML = total4;
    document.getElementById('expense7').innerHTML = 0;

}

function totalAmount() {
    const averageTotal = document.getElementById('expense2').innerHTML;
    const averageTotal2 = document.getElementById('expense4').innerHTML;
    const averageTotal3 = document.getElementById('expense6').innerHTML;
    const averageTotal4 = document.getElementById('expense8').innerHTML;
    // const averageTotal5 = document.getElementById('expense1').innerHTML;
    // const averageTotal6 = document.getElementById('expense3').innerHTML;
    // const averageTotal7 = document.getElementById('expense5').innerHTML;
    // const averageTotal8 = document.getElementById('expense7').innerHTML; 

    let intAverageTotal = Number(averageTotal);
    let intAverageTotal2 = Number(averageTotal2);
    let intAverageTotal3 = Number(averageTotal3);
    let intAverageTotal4 = Number(averageTotal4);
    // let intAverageTotal5 = Number(averageTotal5);
    // let intAverageTotal6 = Number(averageTotal6);
    // let intAverageTotal7 = Number(averageTotal7);
    // let intAverageTotal8 = Number(averageTotal8);

    let totalValue = intAverageTotal + intAverageTotal2 + intAverageTotal3 + intAverageTotal4; //  intAverageTotal5 + intAverageTotal6 + intAverageTotal7 + intAverageTotal8;
    // console.log(totalValue)
    document.getElementById('total_amount').innerHTML = totalValue;
    document.getElementById('total_amount2').innerHTML = totalValue;
    document.getElementById('total_amount3').innerHTML = totalValue;
    document.getElementById('total_amount4').innerHTML = totalValue;
    document.getElementById('total_amount5').innerHTML = totalValue;



    // let equalValue = totalValue/4;
    // console.log(equalValue);
    document.getElementById('equal_amount').innerText = totalValue / 4;
    document.getElementById('equal_amount2').innerText = totalValue / 4;
    document.getElementById('equal_amount3').innerText = totalValue / 4;
    document.getElementById('equal_amount4').innerText = totalValue / 4;
    document.getElementById('equal_amount5').innerText = totalValue / 4;




    // each person clearance amount 
    let minhadExpense = document.getElementById('expense2').innerHTML;
    let hasanExpense = document.getElementById('expense4').innerHTML;
    let faizanExpense = document.getElementById('expense6').innerHTML;
    let shamsExpense = document.getElementById('expense8').innerHTML;

    let equalValue = document.getElementById('equal_amount').innerHTML;

    let minhadValue = minhadExpense - equalValue;
    let hasanValue = hasanExpense - equalValue; 
    let fazianValue = faizanExpense - equalValue;
    let shamsValue = shamsExpense - equalValue;

    document.getElementById('minhad_give').innerHTML = minhadValue;
    document.getElementById('hasan_amount').innerHTML = hasanValue;
    document.getElementById('faizan_amount').innerHTML = fazianValue;
    document.getElementById('shams_amount').innerHTML = shamsValue;
}

