const Chat = require('../models/Chat');

module.exports = {
  async index(request, response) {
    try {
      const services = await Chat.find();

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

      const service = await Chat.findById(id);

      return response.status(200).json(service);
    } catch (error) {
      return response.status(404).json({ message: error });
    }
  },

  async store(request, response) {
    const { requesterId, providerId, messages } = request.body;

    try {
      const userCreated = await Chat.create({
        requesterId,
        providerId,
        messages,
      });

      return response.status(201).json(userCreated);
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
      const serviceUpdate = await Chat.findById(id);
      serviceUpdate.messages.push(requestUpdate);
      serviceUpdate.save();

      /*     if (serviceUpdate != null) {
        delete serviceUpdate.password;
      } */
      return response.status(200).json(serviceUpdate);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
  async destroy(request, response) {
    const { id } = request.params;
    try {
      const serviceDeleted = await Chat.findByIdAndDelete(id);

      return response.json({ message: 'deletado' });
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },

};
