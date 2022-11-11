var Cat = require('../models/cat');
// List of all Cats
exports.cat_list = async function(req, res) {
    try{
    theCats = await Cat.find();
    res.send(theCats);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Cat.

// Handle Cat create on POST.

// Handle Cat delete form on DELETE.
exports.cat_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Cat delete DELETE ' + req.params.id);
};
// Handle Cat update form on PUT.
exports.cat_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Cat update PUT' + req.params.id);
};
exports.cat_view_all_Page = async function(req, res) {
    try{
    theCats = await Cat.find();
    res.render('cat', { title: 'Cat Search Results', results: theCats });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.cat_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Cat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"cat_type":"goat", "cost":12, "size":"large"}
    document.cat_color = req.body.cat_color;
    document.cat_breed = req.body.cat_breed;
    document.cat_price = req.body.cat_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

exports.cat_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Cat.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
   // Handle Cat update form on PUT.
exports.cat_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Cat.findById( req.params.id)
 // Do updates of properties
 if(req.body.cat_color)
 toUpdate.cat_color = req.body.cat_color;
 if(req.body.cat_breed) toUpdate.cat_breed = req.body.cat_breed;
 if(req.body.cat_price) toUpdate.cat_price = req.body.cat_price;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};