const express = require("express");
const app = express();

app.use(express.json());

const ogrenciler = [
    { id: 1, name: "ahmet" },
    { id: 2 , name: "mehmet" }
]
app.get("/api/ogrenciler",function(req,res) {
    res.send(ogrenciler);
});

app.get("/api/ogrenciler/:id",function(req,res){
   const ogrenci = ogrenciler.find(ogrenci=> ogrenci.id === parseInt(req.params.id));
   if(!ogrenci) res.status(404).send("Girdiginiz ID'ye sahip ogrenci bulunamadı.");
   else {
    res.send(ogrenci);
   }
});

app.post("/api/ogrenciler",function(req,res){
const ogrenciler = {
    id: ogrenciler.length+1,
    name: req.body.name
};
    ogrenciler.push(ogrenci);
    res.send(ogrenci);
});

const port = process.env.PORT || 3000;

app.listen (port);

console.log("sunucu ${port} portunda çalışıyor");