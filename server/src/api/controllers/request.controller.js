/* eslint-disable func-names */
const Request = require('../models/request.model');


exports.create = function (req, res) {
  console.log(req.body);
  const request = new Request(
    {
      message: req.body.message
    }
  );

  request.save((err) => {
    if (err) return next(err);
    res.send('Success!');
  });
};

exports.detail = function (req, res) {
  Request.findById(req.params.id, (err, request) => {
    if (err) return next(err);
    res.json(request);
  });
};

exports.update = function (req, res) {
  Request.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, request) => {
    if (err) return next(err);
    res.send(request);
  });
};

exports.delete = function (req, res) {
  Request.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Deleted successfully!');
  });
};
