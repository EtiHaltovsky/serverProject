// const {volunteer,volunteerModel} = require('../models/volunteerModel');


const volunteer = require('../models/volunteerModel');


  const getAllVolunteers = async () => {
    try {
      const vol = await volunteer.find();
      console.log(vol) 
      return vol
    }
    catch(err) {
      return err
    }
  };
  
  const getVolunteerById = ( id ) => {
    return volunteer.findById(id);
  };
  
  
  const addVolunteer = async (obj) => {
    try{
      const findVolunteerById = await volunteer.find(volunteerId)
      if(!findVolunteerById){
      const v = await new volunteer(obj);
      console.log(v);
      v.save()
      return v;
    }else(alert('המשתמש כבר קיים במאגר'));
  }
    catch(err){
      return err;
    }
  };

  const Approval=async()=>{
    try{


    }
    catch(err){
      return err;
    }
  }
  
  
  const updateVolunteer = async (obj) => {
    console.log("obj", obj)
    try{
      await Volunteer.findByIdAndUpdate(obj._id.toJSON('new ObjectId'), obj);
      return "Updated!"
    }
    catch(err){
      return err;
    }
  };
  
  const deleteVolunteer = async (id) => {
    await volunteer.findByIdAndDelete(id);
      return 'Deleted!';
    }  
  
  module.exports = {
    getAllVolunteers,
    getVolunteerById,
    addVolunteer,
    updateVolunteer,
    deleteVolunteer,
  };



  // const User = require('../models/userModel');

  // const getAllUsers = async () => {
  //   try {
  //     const uses = await User.find();
  //     return uses
  //   }
  //   catch(err) {
  //     return err
  //   }
  // };
  
  // const getUserById = ( id ) => {
  //   return User.findById(id);
  // };
  
  
  // const addUser = async (obj) => {
  //   try{
  //     const us = new User(obj);
  //     await (us.save())
  //     return us;
  //   }
  //   catch(err){
  //     return err;
  //   }
  // };
  
  // const updateUser = async (obj) => {
  //   console.log("obj", obj)
  //   try{
  //     await User.findByIdAndUpdate(obj._id.toJSON('new ObjectId'), obj);
  //     return "Updated!"
  //   }
  //   catch(err){
  //     return err;
  //   }
  // };
  
  // const deleteUser = async (id) => {
  //   await User.findByIdAndDelete(id);
  //     return 'Deleted!';
  //   }  
  
  // module.exports = {
  //   getAllUsers,
  //   getUserById,
  //   addUser,
  //   updateUser,
  //   deleteUser,
  // };