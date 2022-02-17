function westMoneyAll(billid){
    const foodBillInput = document.getElementById(billid + '-money');
    const foodBill = parseFloat(foodBillInput.value);
    foodBillInput.value = '';
    return foodBill;
}


document.getElementById('calcule-btn').addEventListener('click', function(){
    const moneySelaryInput = document.getElementById('montley-salary');
    const montleySelary = parseFloat(moneySelaryInput.value);
    const foodBill = westMoneyAll('food');
    const romRent = westMoneyAll('rom');
    const clothesBill = westMoneyAll('clother');
    const totalWestBill = foodBill + romRent + clothesBill;
    const westMoneyInput = document.getElementById('west-money');
    const extayMoney = montleySelary - totalWestBill;
    const showExtrayInput = document.getElementById('extra-money');
    westMoneyInput.innerText = totalWestBill;
    showExtrayInput.innerText = extayMoney;
    moneySelaryInput.value = '';

})


