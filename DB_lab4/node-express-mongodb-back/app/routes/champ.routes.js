module.exports = app => {
    const champs = require("../controllers/champ.controller.js");

    var router = require("express").Router();

    // Create a new entry
    router.post("/", champs.create);

    // Retrieve all entrys
    router.get("/", champs.findAll);

    // Retrieve a single entry with id
    router.get("/:id", champs.findOne);

    // Update a entryl with id
    router.put("/:id", champs.update);

    // Delete a entry with id
    router.delete("/:id", champs.delete);

    // Create a new entry
    router.delete("/", champs.deleteAll);

    app.use("/api/champs", router);
};
