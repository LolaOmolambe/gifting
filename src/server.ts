import app from "./app";
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || "development"

const start = () => {
    app.listen(PORT, () => {
        console.log(`
        ################################################
        🛡️  Server listening on port: ${PORT}  IN ${NODE_ENV}🛡️
        ################################################
      `);
       
    });
}

start();
