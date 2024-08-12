var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["user"] = 1] = "user";
    role[role["visitor"] = 2] = "visitor";
    role[role["buyer"] = 3] = "buyer";
    role[role["seller"] = 4] = "seller";
})(role || (role = {}));
var Auth = role.admin;
console.log(Auth);
