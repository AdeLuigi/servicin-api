const { sign } = require('jsonwebtoken');
const User = require('../models/UserModel');

module.exports = {
  async login(request, response) {
    try {
      const { email, password } = request.body;

      const service = await User.findOne({ email });
      /*       console.log(password);
      console.log(service.password); */
      const { _id } = service;
      if (password === service.password) {
        /*         const token = sign({}, 'senha', {
          subject: _id,
          expiresIn: '1d',
        });
 */
        return response.status(200).json({ service, _id });
      }
      return response.status(404).json({ message: 'Password or email invalid' });
    } catch (error) {
      return response.status(404).json({ message: error });
    }
  },
};
