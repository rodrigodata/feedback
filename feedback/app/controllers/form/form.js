class FormController {

    async get(req, resp, next) {
        return resp.status(200).send({
            "message": "form saved"
        })
    }

    async create(req, res) {
        res.send("message: " + req.params.id);
        
    }

}

module.exports = new FormController();