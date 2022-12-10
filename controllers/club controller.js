/**
 * @author houssemeddinesaidi<houssem.saiidi@esprit.tn>
 */


const { Club } = require("../models");


 //------------------------------------------------------------------------------------GET /api/Club/
 const getClub = async (req, res, next) => {
     
     // check authorization req.userData.id (from the token)
 
     Club.findAll().then(club => {
         res.status(200).json({ data: club });
     }).catch(error => {
         console.log(error.message);
         res.status(404).json({ error: "Un error occured..." });
     });
 }
 
 //------------------------------------------------------------------------------------POST /api/Club/
 const addClub = async (req, res, next) => {
 
     // check authorization req.userData.id (from the token)
 
     const { id, nomClub,nbrMembres,activite,budget,dateFondation } = req.body;
    console.log('Club controllers...');
    Club.create({ id,nomClub,nbrMembres,activite ,budget,dateFondation}).then(response => {
         res.status(201).json({ message: "Club created...",response});
     }).catch(error => {
         console.log(error.message);
         res.status(404).json({ error: "Un error occured" });
     });
 }
 
 //------------------------------------------------------------------------------------PUT /api/Club/
 const updateClub= async (req, res, next) => {
 
     // check authorization req.userData.id (from the token) 
 
     const { id, nomClub,nbrMembres,activite,budget,dateFondation } = req.body;
 
     Club.update({id,nomClub,nbrMembres,activite ,budget,dateFondation}, { where: { id }})
             .then( () => {
                 res.status(201).json({
                     message: `Club with id ${id} updated...`
                 })
             })
             .catch(error => {
                 console.log(error.message);
                 res.status(404).json({
                     message: error.message
                 })
             });
 }
 
 //------------------------------------------------------------------------------------DELETE /api/Club/:id
 const deleteClub = async (req, res, next) => {
 
     // check authorization req.userData.id (from the token)
 
     const id = req.params['id'];
     Club.destroy({ where: { id: id}})
         .then(response => {
             res.status(201).json({
                 message: `Club with id ${id} deleted...`
             })
         }).catch(error => {
             console.log(error.message);
             res.status(404).json({
                 message: "Un error occured"
             })
         })
 }
 
 
 module.exports = { getClub,addClub, updateClub, deleteClub };