const db = require("../models");


module.exports = function(app) {
  //first route will get back all the survey orders in the db
  app.get("/api/orders", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    //you can use 'include: db.Schedule' inside the curly braces in the method to bring the doctor's schedule
    db.Survey.findAll({
    }).then(function(choice) {
      res.send(choice);
    });
  });

  //route will return the client with the passed ID
  app.get("/api/clients/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.client.findOne({
      where: {
        clientID: req.params.id
      }
    }).then(function(dbClient) {
      res.json(dbClient);
    });
  });

  //these are the posts
  app.post("/api/clients/choice", function(req, res) {
    db.choice.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
 });

};