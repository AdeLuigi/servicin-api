const Service = require('../models/ServiceModel');

module.exports = {
  async userService(request, response) {
    const { userId } = request.body;
    try {
      const services = await Service.find({
        userId,
      });

      return response.json(services);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
};
