const mongoose = require("mongoose");

const ClientSchema  = mongoose.Schema({
    name:{
        type: String
    },
    lastname:{
        type:String
    }
});

mongoose.model("Client", ClientSchema);