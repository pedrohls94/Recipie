module.exports = function(app)
{

    /*
     * Default routes
     */
    app.get('/',function(req,res){
        var viewData = { success:req.session.success, error:req.session.error };
        delete req.session.success;
        delete req.session.error;
        res.render('index.ejs', viewData);
     });


    /*
     * User related routes
     */
    var userController = require("../controllers/userController");

    app.post('/signup',function(req, res) {
        userController.signup(req, res);
    });

    app.post('/login', function (req, res) {
        userController.authenticate(req, res);
    });

    app.get('/dashboard', checkAuth, function(req, res){
        userController.startSession(req, res);
    });

    app.get('/logout', function (req, res) {
      delete req.session.user_id;
      res.redirect('/');
    });

}
