function travelTime(arr) {
    let obj = {};

    for (const info of arr) {
        let [countryName, townName, travelCost] = info.split(' > ');
        if (!obj.hasOwnProperty(countryName)) {
            obj[countryName] = {};
        }
        if (!obj[countryName].hasOwnProperty(townName)) {
            obj[countryName][townName] = travelCost;
        }

        let biggerCost = obj[countryName][townName];

        if (biggerCost > travelCost) {
            obj[countryName][townName] = travelCost;
        }
    }
    let sortedCountryNames = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [country, town] of sortedCountryNames) {
        let result = '';
        let newSet = Object.entries(town).sort((a, b) => a[1].localeCompare(b[1]))
        for (const [town, cost] of newSet) {
            result += `${town} -> ${cost} `
        }
        console.log(country + ' -> ' + result);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);