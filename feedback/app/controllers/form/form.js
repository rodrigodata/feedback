class FormController {

    async get(req, resp, next) {
        const mock = require("./formMock.json");
        resp.send(mock); 
    }

    async create(req, res) {
        return res.status(200).send({
            "message": "form saved"
        })
    }

}

module.exports = new FormController();