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
    res.send(request);
  });
};

// note: mongoose docs zeggen om beter het doc te queryen, aan te passen en dan te save()en
// ipv gebruik te maken van de update methodes. TODO?
exports.update = function (req, res) {
  Request.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    if (err) return next(err);
    res.send('Request updated!');
  });
};

exports.delete = function (req, res) {
  Request.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Deleted successfully!');
  });
};
