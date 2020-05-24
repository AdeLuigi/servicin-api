const User = require('../models/UserModel');

module.exports = {
  async login(request, response) {
    try {
      const { email, password } = request.body;

      const service = await User.findOne({ email });
      /*       console.log(password);
      console.log(service.password); */
      if (password === service.password) {
        return response.status(200).json({ service });
      }
      return response.status(404).json({ message: 'Password or email invalid' });
    } catch (error) {
      return response.status(404).json({ message: error });
    }
  },
};
