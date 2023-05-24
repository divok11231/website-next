import mongoose, { connect } from 'mongoose' 

const MongoConnect = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGOURI)
        if (connection.readyState == 1) {
            return Promise.resolve(true)
        }
    }
    catch (err) {
        return Promise.reject(err)
    }
}

export default MongoConnect;