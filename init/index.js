const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongo_Url = "mongodb://127.0.0.1:27017/wonderlust";

main()
.then(()=>{
    console.log("connected successfully");
})
.catch((err)=>{
   
    console.log(err);
});

async function main(){
    await mongoose.connect(mongo_Url);
}

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) =>({...obj,owner :'66efe3ef6b7eb90a008db165'}));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};

initDB();