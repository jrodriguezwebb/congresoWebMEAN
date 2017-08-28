'use strict'
//incluyo el modelo
var UserType = require('../models/userType');

//Crear
function createUserType(req,res){
    //instanciamos una nueva clase
    var userType = new UserType();
    
    //recuperamos los parametros que vienen 
    var params = req.body;
    userType.name = params.name;
    console.log(params);
    //validamos los campos
    if(userType.name!=null){
        //insertamos el objeto
        userType.save((err,userTypeStored) => {
            if(err){
                res.status(500).send({message:'Error al guardar'});
            }else{
                res.status(200).send({message:'Tipo de usuario Registrado'});
            }
        });
    }
    else
    {
        res.status(200).send({message: 'Introduce todos los campos'});
    }
}

//Leer
function readUserType(req,res){
    //TODO: finish
    //recupero los parametos
	/*var userId = req.params.id;    
    //valido si viene un userID
    if(userId != undefined){    
        //busco el o los usuarios
        User.findById(userId,(err, user)=>{
            if(err){
                res.status(500).send({message: 'Error al devolver usuario'});
                return false;
            }
            else
            {
                //si encuentro algo lo muestro
                if(user){
                    res.status(200).send(user);
                }
                else
                {
                    res.status(200).send({message: 'Usuario no encontrado'});
                }
            }
        });	
    }*/
}

//Leer todos los usuarios
function readUserTypes(req,res){
    //busco el o los usuarios
    //TODO: finish
	/*User.find({},(err, users)=>{
		if(err){
			res.status(500).send({message: 'Error al devolver usuario'});
			return false;
		}
		else
		{
            //si encuentro algo lo muestro
            if(users.length > 0){
				res.status(200).send(users);
			}
			else
			{
                res.status(200).send({message: 'Usuario no encontrado'});
			}
		}
	});*/	
}

//Actualizar
function updateUserType(req,res){
    //recibo el id por parametro
    //TODO: finish
	/*var userId = req.params.id;
    //json recibido con todos los campos a actualizar
	var update = req.body;
    if(update){
        //busco y actualizo el usuario 
                                             //  V   importante new para que te de el usuario actualizado
        User.findByIdAndUpdate(userId,update,{new: true},(err, usuarioUpdated)=>{
            if(err){
                res.status(500).send({message: 'Error al actualizar el marcador'+err});
                return false;
            }
            res.status(200).send(usuarioUpdated);
        });
    }*/
    
}

//borrar
function deleteUserType(req,res){
	//recibo el id por parametro
    //TODO: finish
	/*var userId = req.params.id;
	User.findById(userId,(err, user)=>{
		if(err){
			res.status(500).send({message: 'Error al devolver el usuario'+err});
			return false;
		}
		else
		{
			if(!user)
			{
				res.status(404).send({message: 'no hay usuario'});
			}
			else
			{
				//borramos el usuario
                user.remove(err =>{
					if(err)
					{
						res.status(500).send({message: 'El usuario no se ha borrado'});
					}else
					{
						res.status(200).send({message: 'El usuario se ha borrado'});
					}
				});
			}
		}
	});*/
}

module.exports = {
    createUserType,
    readUserType,
    readUserTypes,
    updateUserType,
    deleteUserType
}