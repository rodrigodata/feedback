class FeedbackController {

    async get(req, resp, next) {
        return resp.status(200).send({
            "message": "Hello World"
        })
    }

    

}

module.exports = new FeedbackController();