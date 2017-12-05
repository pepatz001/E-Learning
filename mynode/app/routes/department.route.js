var department = require('../controllers/department.controller');

module.exports = (app) => {
    var path = '/api/department';

    app.get(path + '/getContent', department.getContent);
    app.post(path + '/create', department.create);

}