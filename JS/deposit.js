document.getElementById('btn-deposit').addEventListener('click', function () {
    // get the deposite ammount from input field

    const depositField = document.getElementById('user-deposit')
    const newDepositAmount = depositField.value
    // console.log(depositAmount)
    
//     step-:get the pervious deposit total amount
    // for non input(element other than input,textarea)
    const depositTotalAmount = document.getElementById('deposit-total')
    const PrevoiusDepositTotal = depositTotalAmount.innerText
    const currentDepositTotal= parseInt(PrevoiusDepositTotal)+parseInt(newDepositAmount)
    depositTotalAmount.innerText = currentDepositTotal

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotal=balanceTotalElement.innerText
    
    // calculate total balance

    const curentBalanceTotal = parseInt(previousBalanceTotal) + parseInt(newDepositAmount)
    balanceTotalElement.innerText=curentBalanceTotal

    depositField.value=''
    
})