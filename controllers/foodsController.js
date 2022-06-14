const foodsmodel = require('../models/foodsModel')
const potosmodel = require('../models/potosModel')
const upload = require('../helper/fileupload')

const methodUploadFoods = async (req,res) => {
    try {

        // untuk upload filenya
        await upload(req,res);

        if(req.file == undefined){
            console.error(req.file)
            return res.status(400).send({message: "Image belum dipilih"})
        }

        // untuk urusan DB
        potosmodel.create({
            idFoods : req.body.idFoods,
            path :req.file.originalname
        }).then ((data) =>{
            res.status(200).send({
                message:"file berhasil di upload" + data.path
            })
        })

    } catch(error){
        console.log(error.message)
        res.status(400).send('error bos')
    }
}

const methodPost = async (req,res) => {
    try {
        const {namamakanan, daerah, deskripsi} = req.body;
        const store = new foodsmodel({
            namamakanan, daerah, deskripsi
        })

        await store.save();
        res.json(store)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('error bos')
    }
}

const methodGet = async (req,res) => {
    try {
        const getData = await foodsmodel.findAll({});
        res.json(getData)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('error bos')
    }
}

const methodGetId = async (req,res) => {
    try {
        const id = req.params.id
        const getData = await foodsmodel.findOne({
            where:{id:id}
        });
        res.json(getData)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('error bos')
    }
}

const methodPut = async (req,res) => {
    try {
        const {namamakanan, daerah, deskripsi} = req.body;
        const id = req.params.id
        const updateFoods = foodsmodel.update({
            namamakanan, daerah, deskripsi
        },{
            where : {id:id}
        })

        await updateFoods
        res.send('berhasil update')
        // res.json(updateFoods)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('error bos')
    }
}

const methodDelete = async (req,res) => {
    try {
        const id = req.params.id
        const deleteFoods = foodsmodel.destroy({
           where : {id:id}
        })

        await deleteFoods
        res.send('berhasil delete')
        // res.json(deleteFoods)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('error bos')
    }
}

module.exports = {
    methodPost, 
    methodGet,
    methodGetId,
    methodPut,
    methodDelete,
    methodUploadFoods
}