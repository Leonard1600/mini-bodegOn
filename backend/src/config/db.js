import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Conexión a MongoDB utilizando la URI de la base de datos de MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Detener el proceso en caso de error
  }
};

export default connectDB;

