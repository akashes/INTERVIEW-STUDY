var buyChoco = function(prices, money) {
    let sortedPrices = prices.sort((a,b)=>a-b)
    if(    money>sortedPrices[0]+sortedPrices[1] ){
        return     money-(sortedPrices[0]+sortedPrices[1] )

    }else if(    money<sortedPrices[0]+sortedPrices[1] ){
        return money
    }else{
        return 0
    }
}
    let prices=[1,1,1]
console.log( buyChoco(prices,3))