const server = require("./src/app.js");
const { db } = require("./src/db.js");
const { Pet } = require("./src/db");
const json = require("./src/Helper/mascotas.json"); 

const mascotas = json.data;

db.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, async () => {
    console.log("%s Server Levantado: 3001");
    await Pet.bulkCreate(mascotas);
  });
});
