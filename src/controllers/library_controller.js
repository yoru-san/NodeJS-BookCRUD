const Library = require('../models/library.model');
const service = require('../services/library.service');

exports.index = (_, res) => {
    service.findAllLibraries().then((libraries) => {
        res.json(libraries);
    });
}

exports.show = (req, res) => {
    service.findOneLibrary(req.params.id).then((library) => {
        if (library){
            res.send("No matching library found");
        }
        else {
            res.status(200).json(library);
        }
    });
}

exports.create = (req, res) => {
    let library = new Library();
    library.name = req.body.name;

    const point = { type: 'Point', coordinates: [req.body.lng, req.body.lat] };
    library.location = point;

    service.addLibrary(library).then((libraryCreated) => {
        res.status(201).json(libraryCreated);
    });
}

exports.update = (req, res) => {
    var library = new Library();
    library._id = req.params.id;
    library.name = req.body.name;

    const point = { type: 'Point', coordinates: [req.body.lng, req.body.lat] };
    library.location = point;

    service.updateOneLibrary(library).then((libraryUpdated) => {
        if (!libraryUpdated) {
            res.status(404).send("No matching library to update");
        }
        else {
            res.json(libraryUpdated);
        }
    });
}

exports.delete = (req, res) => {
    service.deleteOneLibrary(req.params.id).then((libraryDeleted) => {
        if (!libraryDeleted) {
            res.status(404).send("No matching library to delete");
        }
        else {
            res.status(200).send("The library was deleted");
        }
    });
}

exports.findNear = (req, res) => {
    const lng = req.query.lng;
    const lat = req.query.lat;

    if (!lng || !lat) {
        res.status(400).send('You must provide longitude and latitude.').end();
    }
    else {
        service.findNearLibrary(parseFloat(lng), parseFloat(lat)).then((nearLibraries) => {
            res.json(nearLibraries);
        }).catch((err) => {
            res.status(500);
        });
    }


}