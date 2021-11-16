const notFound = function(request, response){
    response.status(404).send("Route does not exist")
}

module.exports = notFound;