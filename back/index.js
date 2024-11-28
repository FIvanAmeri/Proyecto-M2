const app = require('./src/server');
const dbCon = require('./src/config/dbCon');

dbCon().then(() => {
    app.listen(3003, () => {
        console.log("El servidor está corriendo en http://localhost:3003/movies");
    });
}).catch(err => {
    console.error("Error al conectar con la base de datos:", err);
    process.exit(1);
});
