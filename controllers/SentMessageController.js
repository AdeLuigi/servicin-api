const Chat = require('../models/Chat');

module.exports = {
  async sent(request, response) {
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
};
