const Library = require('../models/library.model');

exports.addLibrary = (libraryCreated) => {
    return libraryCreated.save();
}

exports.findAllLibraries = () => {
    return Library.find();
}

exports.findOneLibrary = (id) => {
    return Library.findById(id);
}

exports.updateOneLibrary = (library) => {
    return Library.findByIdAndUpdate(library._id, library, { "new": true });
}

exports.deleteOneLibrary = (id) => {
    return Library.findOneAndDelete({ _id: id });
}

exports.findNearLibrary = (lng, lat) => {

    var point = {type: 'Point', coordinates: [lng, lat]}

    return Library.aggregate([{
           $geoNear: {
             near: point,
             spherical: true,
             maxDistance: 2000,
             distanceMultiplier: 1,
             distanceField: 'distanceFromPoint'
           }
    }]);
}