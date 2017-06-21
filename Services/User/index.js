var userService = (function(){
  var users = [];

	function addUser(req, resp) {
    if (req.payload.user) {
      var user = _.findWhere(users, {
        email : req.payload.user.email
      });

      if (user) {
        user = req.payload.user;
      } else {
        users.push(req.payload.user);
        user = req.payload.user;
      }

      // Returns uses
      resp({
        ok : true,
        user : user,
      });
    } else {
      // Returns uses
      resp({
        ok   : false,
        error : 'You need to pass a valid user',
      });
    }
	}

  function login(req, resp) {
    if (req.payload.email && req.payload.password) {
      var user = _.findWhere(users, {
        email : req.payload.email
      });

      if (user && (user.password == req.payload.password)) {
        resp({
          ok : true,
          user : user,
        });
      } else {
        resp({
          ok   : false,
          error : 'Invalid username or password',
        });
      }

    } else {
      // Returns error
      resp({
        ok   : false,
        error : 'Invalid username or password',
      });
    }
	}

	return {
		addUser : addUser,
    login : login,
	};
})();
module.exports = userService;
