const mongoose = require('mongoose');
const Address = require('./utils/AddressSchema');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  typeUser: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cpf: { type: String, required: true },
  cnpj: { type: String, required: false },
  birthdate: { type: Date, required: false },
  avatarUrl: { type: String, required: false },
  tags: { type: [String] },
  address: Address,
});

module.exports = mongoose.model('User', UserSchema);
