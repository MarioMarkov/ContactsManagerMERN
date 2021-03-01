const mogoose = require('mongoose');
const config  = require('config');
const db = config.get('mongoURI');

const connectDB = async () =>{
    try {
       await mogoose.connect(db,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology: true 
        });
        console.log("MongoDb Connected");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
