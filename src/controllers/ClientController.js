const mongoose = require("mongoose");

const Client = mongoose.model("Client");

module.exports = {
    async index(req, res){
        const clients = await Client.find();

        return res.json(clients);
    },
    async add(req, res){
        const clients = await Client.create(req.body);

        return res.json(clients);
    }, 
    async update(req, res){
        const clients = await Client.findByIdAndUpdate(req.params.id, req.body,{
            new:true//este comando serve para atualizar automaticamente os dados que foram alterados.
        });

        return res.json(clients);
    },
    async show(req, res){
        const clients = await Client.findById(req.params.id);

        return res.json(clients);
    },
    async delete(req, res){
        await Client.findByIdAndRemove(req.params.id);

        return res.send();
    }
}