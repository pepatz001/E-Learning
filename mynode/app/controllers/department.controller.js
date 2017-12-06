var Department = require('mongoose').model('Department');

exports.getContent = (req, res, next) => {
    Department.find((err, department) => {
           if (err) {
                  console.log('Failure');
                  return next(err);
           }
           else {
                  console.log(department);
                  res.json(department);
           }
    });
}

exports.create = (req, res, next) => {
    var department = new Department(req.body);
    department.save((err) => {
           if (err) {
                  console.log('Failure');
                  return next(err);
           }
           else {
                  console.log('Success');
                  res.json(department);
           }
    });
}