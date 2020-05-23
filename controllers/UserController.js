const User = require('../models/UserModel');

module.exports = {

  async index(request, response) {
    try {
      const services = await User.find();

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

      const service = await User.findById(id);

      return response.status(200).json(service);
    } catch (error) {
      return response.status(404).json({ message: error });
    }
  },

  async store(request, response) {
    const {
      firstName,
      secondName,
      typeUser,
      email,
      password,
      cpf,
      cnpj,
      tags,
      birthdate,
      avatarUrl,
      latitude,
      longitude,
      address,
    } = request.body;

    try {
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };
      address.location = location;

      const serviceCreated = await User.create({
        firstName,
        secondName,
        typeUser,
        email,
        password,
        cpf,
        tags,
        cnpj,
        birthdate,
        avatarUrl,
        latitude,
        longitude,
        address,
      });
      delete serviceCreated.password;
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
      const serviceUpdate = await User.findOneAndUpdate(
        filterById,
        requestUpdate,
        {
          new: true,
        },
      );
      if (serviceUpdate != null) {
        delete serviceUpdate.password;
      }
      return response.status(200).json(serviceUpdate);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
  async destroy(request, response) {
    const { id } = request.params;
    try {
      const serviceDeleted = await User.findByIdAndDelete(id);

      return response.json({ message: 'deletado' });
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
};
