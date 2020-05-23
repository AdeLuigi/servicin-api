const Service = require('../models/ServiceModel');

module.exports = {
  async searchServicesFromLocation(request, response) {
    const { longitude, latitude } = request.query;
    try {
      const services = await Service.find({
        'address.location': {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: 10000,
          },
        },
      });

      return response.status(200).json(services);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
};
