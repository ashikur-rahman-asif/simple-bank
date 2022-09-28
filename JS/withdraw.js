document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('user-withdrawal')
    const newWithdrawAmount = parseInt(withdrawField.value)
    // console.log(newWithdrawAmount)

    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previouswithdrawTotal = parseInt(withdrawTotalElement.innerText)
    
    const currentWithdrawalTotal = previouswithdrawTotal + newWithdrawAmount
    withdrawTotalElement.innerText = currentWithdrawalTotal

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText
    const previousBalanceTotal = parseInt(previousBalanceTotalString)
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
    balanceTotalElement.innerText=newBalanceTotal
    

    withdrawField.value=''
})