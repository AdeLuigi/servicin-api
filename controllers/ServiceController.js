const Service = require('../models/ServiceModel');
const User = require('../models/UserModel');


module.exports = {
  async index(request, response) {
    try {
      const services = await Service.find();

      return response.json(services);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
  async show(request, response) {
    try {
      const { id } = request.params;

      if (id === undefined) {
        throw new Error('id not defined');
      }

      const service = await Service.findById(id);

      return response.status(200).json(service);
    } catch (error) {
      return response.status(404).json({ message: error });
    }
  },
  async store(request, response) {
    const {
      name,
      description,
      category,
      price,
      photos,
      remote,
      amountOfPeople,
      providers,
      userId,
      hoursAvailableStart,
      hoursAvailableEnd,
      latitude,
      longitude,
      address,
    } = request.body;

    try {
      const user = await User.findById(userId);
      if (user === null) {
        return response.status(404).json({ message: 'This user not exist' });
      }
      if (user.typeUser !== 'requester') {
        return response
          .status(404)
          .json({ message: 'This user not is requester' });
      }
    } catch {
      return response.status(404).json({ message: 'This user not exist' });
    }

    try {
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };
      address.location = location;
      const serviceCreated = await Service.create({
        name,
        description,
        category,
        price,
        photos,
        remote,
        amountOfPeople,
        providers,
        userId,
        hoursAvailableStart,
        hoursAvailableEnd,
        address,
      });

      return response.status(201).json(serviceCreated);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
  async update(request, response) {
    const { id } = request.params;
    const filterById = {
      _id: id,
    };
    const requestUpdate = request.body;

    try {
      const serviceUpdate = await Service.findOneAndUpdate(
        filterById,
        requestUpdate,
        {
          new: true,
        },
      );
      return response.status(200).json(serviceUpdate);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
  async destroy(request, response) {
    const { id } = request.params;
    try {
      const serviceDeleted = await Service.findByIdAndDelete(id);

      return response.json({ message: 'deletado' });
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },

};
