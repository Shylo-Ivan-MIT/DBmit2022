module.exports = app => {
    const champs = require("../controllers/champ.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", champs.create);

    // Retrieve all Tutorials
    router.get("/", champs.findAll);

    // Retrieve all published Tutorials
    //  router.get("/published", champs.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", champs.findOne);

    // Update a Tutorial with id
    router.put("/:id", champs.update);

    // Delete a Tutorial with id
    router.delete("/:id", champs.delete);

    // Create a new Tutorial
    router.delete("/", champs.deleteAll);

    app.use("/api/champs", router);
};