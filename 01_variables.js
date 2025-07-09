const accountId = 101;
let accountEmail = "abhinaba@gmail.com";
var accountPassword = "12345";
accountCity = "HaiyatNagar";
let accountState;

// accountId -> cannot changed 
accountEmail = "new@gmail.com";
accountPassword = "newpass";
{
    let accountEmail = "new2@gmail.com"; // -> it does't changed becase it has it's own space in the memory
    var accountPassword = "newpass2"; // -> see it changed in the output because is share same memory
}

console.table([accountId, accountEmail, accountPassword,accountCity, accountState]);
/*
    Prefer Not to Use Var -> issue in block scope and Functional Scope
*/