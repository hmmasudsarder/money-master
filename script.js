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
        moneySelaryInput.value = '';
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
document.getElementById('saving-btn').addEventListener('click', function(){
    const savingInput = document.getElementById('saving-input');
    const saving = parseFloat(savingInput.value);
    const totalAmount = totalIncome();
    const savingTotalAmount =totalAmount / 10;
    
})


