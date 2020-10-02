const apiAdapter = require('./apiAdapter')

module.exports = (BASE_URL) => {
    return async (req, res, next) => {
        req.api = apiAdapter(BASE_URL);
        req.api.get('/')
        .then(res => {
            next();
        })
        .catch(err => {
            res.status(404).send(`${BASE_URL} is down`);
        });
    }
}