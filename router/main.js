module.exports = function(app)
{

    /*
     * Default routes
     */
    app.get('/',function(req,res){
        res.render('index.ejs');
     });

}
