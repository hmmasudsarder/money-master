// function for food rent clothes
function westMoneyAll(billid){ 
        const montleyBillInput = document.getElementById(billid + '-money');
        const montleyBill = parseFloat(montleyBillInput.value);
        if(montleyBill > 0){
            montleyBillInput.value = '';
            return montleyBill;
        } else if(isNaN(montleyBill)){
            alert('Opps your type is worng please try again')
        }

}
function totalIncome(){
    const moneySelaryInput = document.getElementById('montley-salary');
    const montleySelary = parseFloat(moneySelaryInput.value);
    if(montleySelary > 0){
        return montleySelary;
    } else {
        alert('Opps Your Income Is Worng Please HardWork Agin I Hope You Can do This Insahallah')
    }
}

document.getElementById('calcule-btn').addEventListener('click', function(){
    // use the function top 
    const montleySelary = totalIncome();
    const foodBill = westMoneyAll('food');
    const romRent = westMoneyAll('rom');
    const clothesBill = westMoneyAll('clother');

    const totalWestBill = foodBill + romRent + clothesBill;
    // show the this main work 
    const westMoneyInput = document.getElementById('west-money');
    const extayMoney = montleySelary - totalWestBill;
    const showExtrayInput = document.getElementById('extra-money');
    westMoneyInput.innerText = totalWestBill;
    showExtrayInput.innerText = extayMoney;
});

// saving money 
document.getElementById('saving-btn').addEventListener('click', function(){
    const savingInput = document.getElementById('saving-input');
    const saving = parseFloat(savingInput.value);
    const totalAmount = totalIncome();
    const extayMoney = document.getElementById('saving-money');
    const lastTotal = document.getElementById('last-money');
    const showExtrayInput = document.getElementById('extra-money');
    const showExtray = parseFloat(showExtrayInput);
    const finisAmound = showExtray - saving;
    console.log(finisAmound);
    const savingTotalAmount = totalAmount / saving;
    extayMoney.innerText = savingTotalAmount;
    
})


