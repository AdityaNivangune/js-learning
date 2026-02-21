const accountId = 12345
let accountEmail = "aditya@google.com"
var accountPassword = "aditya"
accountCity = "Pune"
let accountState;

// accountId = 4321 -> not allowed

accountEmail = "adi@google.com"
accountPassword = "212121"
accountCity = "Mumbai"

console.log(accountId)

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])