/**
 * @author houssemeddinesaidi<houssem.saiidi@esprit.tn>
 */

 const { Livre } = require("../models");



 //------------------------------------------------------------------------------------GET /api/Livre/
 const getLivre = async (req, res, next) => {
     
     // check authorization req.userData.id (from the token)
 
     Livre.findAll().then(livre => {
         res.status(200).json({ data: livre });
     }).catch(error => {
         console.log(error.message);
         res.status(404).json({ error: "Un error occured..." });
     });
 }
 
 //------------------------------------------------------------------------------------POST /api/Livre
 const addLivre = async (req, res, next) => {
 
     // check authorization req.userData.id (from the token)
 
     const { id,titre,auteur,prix,datePublication } = req.body;
 
     Livre.create({ id,titre,auteur,prix,datePublication }).then(response => {
         res.status(200).json({ message: "Livre created...",response});
     }).catch(error => {
         console.log(error.message);
         res.status(404).json({ error: "Un error occured" });
     });
 }
 
 //------------------------------------------------------------------------------------PUT /api/Livre/
 const updateLivre= async (req, res, next) => {
 
     // check authorization req.userData.id (from the token) 
 
     const { id,titre,auteur,prix,datePublication } = req.body;
 
     Livre.update({ id,titre,auteur,prix,datePublication}, { where: { id }})
             .then( () => {
                 res.status(201).json({
                     message: `Livre with id ${id} updated...`
                 })
             })
             .catch(error => {
                 console.log(error.message);
                 res.status(404).json({
                     message: error.message
                 })
             });
 }
 
 //------------------------------------------------------------------------------------DELETE /api/Livre/:id
 const deleteLivre = async (req, res, next) => {
 
     // check authorization req.userData.id (from the token)
 
     const id = req.params['id'];
     Livre.destroy({ where: { id: id}})
         .then(response => {
             res.status(201).json({
                 message: `Livre with id ${id} deleted...`
             })
         }).catch(error => {
             console.log(error.message);
             res.status(404).json({
                 message: "Un error occured"
             })
         })
 }
 
 
 module.exports = { getLivre, addLivre, updateLivre, deleteLivre };