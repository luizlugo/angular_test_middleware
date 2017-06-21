var routeName = baseRouteSuffix + "Users";
var userService = require(__base + 'Services/User/');
var userRoutes = {
	routes : [
		{
			method  : 'POST',
			path    : routeName,
			handler : userService.addUser,
			config : {
				auth : false,
			}
		},
    {
			method  : 'POST',
			path    : routeName + '/Login',
			handler : userService.login,
			config : {
				auth : false,
			}
		},
	],
};
module.exports = userRoutes;
