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