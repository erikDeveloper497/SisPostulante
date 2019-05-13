const postulante = require('../models/postulant');

//define un obj

const postulantCtrl = {};

postulantCtrl.getPostulants= async (req, res)=>{
    const postulantes = await postulante.find();
    res.json(postulantes);

    //await:
    //envia como objeto de javascript
};

//todas las funciones seran definidas aqui
postulantCtrl.createPsotulant = async (req, res)=>{
    const Postulante =  new postulante({
        name: req.body.name,
        apPatern: req.body.apPatern,
        apMatern:req.body.apMatern,
        edad: req.body.edad,
        address: req.body.address,
        genero: req.body.genero,
        telefono: req.body.telefono,
        email: req.body.email,
        expLab: req.body.expLab
    });
    await Postulante.save();
    
    res.json({
        status: 'Postulant saved'
    }); 
    
};


postulantCtrl.getPostulant = async (req, res)=>{
    //console.log(req.params);
    const Postulante = await postulante.findById(req.params.id);
    res.json(Postulante);
}

postulantCtrl.editPostulant = async (req, res)=>{
    const {id} = req.params
    const Postulante = {
        name: req.body.name,
        appatern: req.body.appatern,
        apmatern: req.body.apmatern,
        edad: req.body.edad,
        address: req.body.address,
        genero: req.body.genero,
        movil: req.body.movil,
        email: req.body.email,
        expLab: req.body.expLab
    };
    await postulante.findByIdAndUpdate(id,{$set: Postulante},{new : true});
    res.json({
        status:'postulant update'
    });
};

postulantCtrl.deletePostulant = async (req, res)=>{
        await postulante.findByIdAndRemove(req.params.id);
        res.json({
            status:'Postulant Deleted'
        });
};

module.exports = postulantCtrl;