const config = require('../config');


module.exports = function(handler){
    const [controllerName, methodName] = handler.split(':');
    const controllerClass = require(config.controllersPath + '/' + controllerName);

    const controller = new controllerClass();

    return controller[methodName];
}