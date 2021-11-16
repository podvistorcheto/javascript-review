const asyncWrapper = function(fn){
    return async function(request, response, next){
        try {
            await fn(request, response, next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper;
