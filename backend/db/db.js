require('dotenv').config();
const mongoose = require ('mongoose');

const URI = process.env.MONGO_URL ;
const connectDb = async()=>{
    try{
    
        await mongoose.connect(URI); 
        console.log('DB CONNECTION SUCCESSFUL!!');
    }
    catch(error)
    {
        console.log('Database Connection Failed',error.message);
        process.exit(0);
    }
  
};
module.exports= connectDb;