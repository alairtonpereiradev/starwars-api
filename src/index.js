const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 3000


// construção do banco de dados(models)
const Film = mongoose.model('Film',{
    title: String,
    description: String,
    image_url: String,
    trailer_url: String,
    date: {type: Date, default: Date.now()},
});
app.get("/", async (req, res) =>{
    const films = await Film.find()
    return res.send(films)
    
})

app.put("/:id", async (req, res) => {
    const options = { new: true }  // retorna o novo documento após a atualização  // default: false (retorna o antigo documento)  // https://mongoosejs.com/docs/api/query.html#query_Query_new
    const film = await Film.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
        
    }, options);
    return res.send(film)
})

app.post("/", async (req, res) =>{
    const film = new Film({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
    })

    await film.save()
    //res.send(film)
    return res.send(film)
    
})

app.delete("/:id", async (req, res) => {
    const film = await Film.findByIdAndDelete(req.params.id)
    res.send("Filme deletado com sucesso!")
})


app.listen(port, () => {
    // connexão com mongodb
mongoose.connect('mongodb+srv://<user>:<password>@starwars-api.0qjo6lv.mongodb.net/?retryWrites=true&w=majority&appName=starwars-api')
    console.log("App running")
})