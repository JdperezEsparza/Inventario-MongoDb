import mongoose from "mongoose";
//categorias
const categoriaSchema = mongoose.Schema(
    {
  Imagen : {
    type: String,
    required: true,
    trim: true,
  },
  categoriaNombre:{
    type: String,
    required: true,
    trim: true,
  },
  Descripcion:{
    type: String,
    required: true,
    trim: true,
  }
},
{
     timestamps:true,
}
);

const Categoria = mongoose.model("Categoria",categoriaSchema)

export default Categoria;