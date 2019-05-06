const Library = require('../models/library.model');
const service = require('../services/library.service');

exports.index = (_, res) => {
    service.findAllLibraries().then((libraries) => {
        res.json(libraries);
    });
}

exports.show = (req, res) => {
    service.findOneLibrary(req.params.id).then((library) => {
        res.json(library);
    });
}

exports.create = (req, res) => {
    let library = new Library();
    library.name = req.body.name;

    const point = { type: 'Point', coordinates: [req.body.lng, req.body.lat] };
    library.location = point;

    service.addLibrary(library).then((libraryCreated) => {
        res.status(201);
        res.json(libraryCreated);
    });
}

exports.update = (req, res) => {
    var library = new Library();
    library._id = req.body._id;
    library.name = req.body.name;

    const point = { type: 'Point', coordinates: [req.body.lng, req.body.lat] };
    library.location = point;

    service.updateOneLibrary(library).then((libraryUpdated) => {
        res.json(libraryUpdated);
    });
}

exports.delete = (req, res) => {
    service.deleteOneLibrary(req.params.id).then((libraryDeleted) => {
        res.json(libraryDeleted);
    });
}