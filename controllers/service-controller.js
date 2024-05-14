const Service = require('../models/service-model');

const services = async (req, res) => {
  try {
    const response = await Service.find({});
    if (!response) {
      res.status(404).json({
        msg: 'Services not found',
      });
    }
    return res.status(200).json({ msg: response });
  } catch (error) {
    return res.status(400).json({ Error: error });
  }
};

module.exports = services;
