function reading(numOfPages, pagesIn1Hour, numOfDays){
    let totalTime = numOfPages / pagesIn1Hour;
    let requiredHours = totalTime / numOfDays;
    console.log(requiredHours);
}
reading(212,
    20 ,
    2 
    );