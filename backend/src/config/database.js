import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect
        ('${process.env.MONGODB_URI}')
        console.log('\n MongoDB connected successfully !!! ${connectionInstance.connection.host}');

    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}
export default connectDB;



// const connectDB = async (mongoURI) => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected successfully');
//     } catch (error) {
//     console.error('MongoDB connection error:', error);
//   }
// };

// export default connectDB