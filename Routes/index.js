/**
* API Routes object
**/
var Routes = _.union(
	require(__base + 'Routes/User/').routes
);
module.exports = Routes;
