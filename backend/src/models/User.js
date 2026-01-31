import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Definición del esquema para los usuarios
const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true, // Garantiza que no haya emails duplicados
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    required: true, 
    enum: ['admin', 'user'], // Los roles posibles son 'admin' o 'user'
    default: 'user' 
  },
});

// Middleware para encriptar la contraseña antes de guardarla
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // Si la contraseña no fue modificada, saltamos este paso
  this.password = await bcrypt.hash(this.password, 10); // Encriptamos la contraseña con un salt de 10 rondas
  next();
});

// Método para comparar la contraseña ingresada con la guardada (para login)
userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password); // Comparamos las contraseñas
};

const User = mongoose.model('User', userSchema); // Creamos el modelo con el esquema definido

export default User; // Exportamos el modelo por defecto

