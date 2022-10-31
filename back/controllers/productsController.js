const producto=require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpación

//Ver la lista de productos
exports.getProducts=async (req,res,next) =>{
    const productos= await producto.find();
    if (!productos){
        return res.status(404).json({
            success:false,
            error:true
        })
    }

    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}

//Ver un producto por ID
exports.getProductsById= async (req, res, next)=>{
    const product= await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success:false,
            message: 'No encontramos ese producto'
        })
    }
    res.status(200).json({
        success:true,
        mensaje:"Aqui debajo encuentras informacion sobre tu producto: ",
        product
    })
}

//Update un producto
exports.updateProduct= async (req,res,next) =>{
    let product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){ //Verifico que el objeto no existe para finalizar el poceso
        return res.status(404).json({
            success:false,
            message: 'No encontramos ese producto'
        })
    }
    //Si el objeto si exitia, entonces si ejecuto la actualización
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
}

//Eliminar un producto
exports.deleteProduct= async (req,res,next) =>{
    const product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){ //Verifico que el objeto no existe para finalizar el poceso
        return res.status(404).json({//Si el objeto no existe, return termina el metodo
            success:false,
            message: 'No encontramos ese producto'
        })
    }

    await product.remove();//Eliminar el producto
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}


//HABLEMOS DE FETCH
//Ver todos los productos

function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//VerProductos(); LLamamos al metodo creado para probar la consulta

//Ver por id
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductoPorID('635759f3d39261e8130ec3d5'); Probamos el metodo con un id