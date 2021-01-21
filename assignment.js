// 

// Problem - 1 
function kilometerToMeter(kilometer){
    if(kilometer <= 0){                // distance cannot be negative.
        return -1;
    }
    else{
    var meter = kilometer * 1000;      // 1km = 1000m
        return meter;
    }
}
var oneKilo2 = kilometerToMeter(4);
console.log(oneKilo2);

// Problem - 2
function budgetCalculator(cost1, cost2, cost3){
    if (cost1 <= 0){                    //cost cannot be negative
        return -1;
    }
    else{
        var watchPrice = cost1 * 50;
    }
    if(cost2 <= 0){
        return -1;   
    }
    else{
        var mobilePrice = cost2 * 100;
    }
    if(cost3 <= 0){
        return -1;
    }
    else{
        var laptopPrice = cost3 * 500;
    }
    return watchPrice+mobilePrice+laptopPrice;           // sum of prices
}
var result = budgetCalculator(2, 3, 4);
console.log(result);

// Problem - 3
function hotelCost(days){
    var cost = 0;
    if (days < 0){                           // days cannot be negative
        return -1;
    }
    else if (days <= 10){
        cost = days * 100;
    }
    else if(days <= 20){
        var partOne = 10 * 100;
        var remaining = days - 10;
        var partTwo = remaining * (100 - 20);     //as 20% is off
        cost = partOne + partTwo; 
    }
    else{
        var partOne = 10 * 100;
        var partTwo = 10 * (100 - 20);    //as 20% is off
        var remaining = days - 20;
        var partThree = remaining * (100 - 50);     //as 50% is off
        cost = partOne + partTwo + partThree;
    }
    return cost;
}
var result = hotelCost(40);
console.log(result);

// Problem - 4
function megaFriend(arr){
    var initialLength = 0;
    for(var i=0; i<arr.length; i++){
        var element = arr[i].length;
        if(element>initialLength){          //comparing the leghth
            initialLength = element;    
            var largest = arr[i];           //assigning the bigest value in largest variable
        }
    }
    return largest;
}
var arr = ["Abdullah Asif", "Rashed Hossain", "Ahmad Shafi Rahman Shaad", "Sakawat Hossain khan", "Ratul Mia"];
var result = megaFriend(arr);
console.log(result);