import winston from "winston";

const options: winston.LoggerOptions = {
    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV === "production" ? "error": "debug",
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat()
              ),
        }),
        new winston.transports.File({filename: "debug.log", level: "debug"})
    ],
    level: process.env.LOG_LEVEL,
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
      ),

};

const logger = winston.createLogger(options);

if(process.env.NODE_ENV !== "prodcution"){
    logger.debug("Logging initialized at debug level");
}

export default logger;