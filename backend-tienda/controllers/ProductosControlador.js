const { Productos } = require("../models/index");
const Sequelize = require("sequelize");
const { log } = require("debug");
const Op = Sequelize.Op;
const fs = require("fs");
const path = require("path");

const crearProducto = async (req, res) => {
  console.log(req);
  console.log(req.files);
  let file_name = "Imagen no subida";
  if (!req.files) {
      res.status(400).send({
        status: "Error",
        message: file_name,
      });
  }
  //Nombre y extencion
  let file_path = req.files.file0.path;
  let file_split = file_path.split("\\");

  file_name = file_split[3];
  let extencion_split = file_name.split("\.");
  let extencion = extencion_split[1];
  console.log(extencion);
  if (
    extencion != "png" &&
    extencion != "jpg" &&
    extencion != "jpge" &&
    extencion != "gif"
  ) {
      fs.unlink(file_path, (err) => {
        res.status(200).send({
          status: "Error",
          message: "La extención de la imagen no es valida",
        });
      });
  } else {
    try {
          console.log(req.body);
          let pro=req.body
          producto={
              nombre:pro.nombre,
              valor:pro.valor,
              descripcion:pro.descripcion,
              disponibilidad:pro.disponibilidad,
              imagen:file_name
          }
          const productoCreado = await Productos.create(producto);
          if (productoCreado) {
            res.status(200).send({
              productoCreado,
            });
          } else {
            res.status(400).send({
              msg: "Error al crear el producto",
            });
          }
    } catch (error) {
      res.status(500).send({
        error:error
      });
    }
  };

    
  }

const mostrarImagen=(req,res)=>{
  let file = req.params.image;
  let path_file = `./public/upload/productos/${file}`;

  let existe=fs.existsSync(path_file);
  console.log(existe,path_file)
  if(existe){
    return res.sendFile(path.resolve(path_file))
  }

}
  

const listarProductos = async (req, res) => {
  try {
    const listaProductos = await Productos.findAll();
    if (listaProductos.length > 0) {
      res.status(200).send({
        listaProductos,
      });
    } else {
      res.status(200).send({
        msg: "No hay productos registrados",
      });
    }
  } catch (err) {
    console.log(err);
  }
};


const editarProducto = async (req, res) => {
  console.log(req.body)
  try {
    let resp=await Productos.update({
      nombre: req.body.nombre
  }, {
      where: {
          id: req.params.id
      }
  })
  console.log(resp)
  res.status(200).send({
    msg: resp,
  });
  } catch (error) {
    
  }
 

 
};

module.exports = {
  crearProducto,
  listarProductos,
  editarProducto,
  mostrarImagen
};
