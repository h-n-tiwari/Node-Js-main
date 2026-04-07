import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://node_:nanguDB#001@node.kehiktj.mongodb.net/devTinder",
    );
};



export default connectDB;