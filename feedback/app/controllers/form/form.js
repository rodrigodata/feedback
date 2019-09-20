class FormController {

    async getFormAnswers(req, resp, next) {
        const mock = require("./formMock.json");
        resp.send(mock); 
    }

    async createForm(req, res) {
        return res.status(200).send({
            "message": "form saved successfully!"
        })
    }

    async answerForm(req, res) {
        return res.status(200).send({
            "message": "answers saved successfully!"
        })
    }
}

module.exports = new FormController();