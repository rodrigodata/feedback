const models = require("./models/index");

models.sequelize.sync().then(() => {
  console.log("Conexão efetuada!")
}).catch((err) => {
  console.log(err, "Ocorreu um erro ao se conectar ao banco de dados!")
});