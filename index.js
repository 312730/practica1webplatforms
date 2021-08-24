const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level = "debug"; //production

logger.info("la aplicacion se inicio con exito");
logger.warn("Cuidado falta la libreria esta en el sistema");
logger.error("no se encuentra la funcion para basarse");
logger.fatal("no se pudo iniciar la aplicacion");

function sumar(x,y){
  return x+y;
}
module.exports = sumar;
