const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    title: String,
    link:String
});

const querySchema = mongoose.Schema({
    query: String,
    reply:String
});

const gearProcessSchema = mongoose.Schema({
    value: Number,
    label:String
});

const mail = mongoose.Schema({
    name:String,
    email:String
});

const docsMaterials = mongoose.Schema({
    Material:String,
    MaterialNo:String,
    TS:String,
    E:String,
    D:String,
    hardness:String,
    Characteristics:String

})

let dropLinks = mongoose.model('dropLinks', Schema);
let navLinks = mongoose.model('navLinks', Schema);
let solverLinks = mongoose.model('solverLinks', Schema);
let queries = mongoose.model('queries', querySchema);
let gearProcesses = mongoose.model('gearProcesses', gearProcessSchema);
let gearMaterials = mongoose.model('gearMaterials', gearProcessSchema);
let shaftSurfaceFinish = mongoose.model('surfaceFinish', gearProcessSchema);
let docsMaterial = mongoose.model('docsMaterials', docsMaterials);
let email = mongoose.model('contactReceived', mail);
module.exports = {
    dropLinks:dropLinks, 
    navLinks:navLinks,
    solverLinks:solverLinks,
    queries:queries,
    gearProcesses:gearProcesses,
    gearMaterials:gearMaterials,
    shaftSurfaceFinish:shaftSurfaceFinish,
    docsMaterial:docsMaterial,
    email:email
};