const weight = require('../models/weightsModel');

  const getAllWeight = async () => {
    try {
      const wei = await Weight.find();
      return wei
    }
    catch(err) {
      return err
    }
  };
  
  const getWeightById = ( id ) => {
    return Weight.findById(id);
  };
  
  
  const addWeight = async (obj) => {
    try{
      const w = new Weight(obj);
      await (w.save())
      return w;
    }
    catch(err){
      return err;
    }
  };
  
  const updateWeight = async (obj) => {
    console.log("obj", obj)
    try{
      await Weight.findByIdAndUpdate(obj._id.toJSON('new ObjectId'), obj);
      return "Updated!"
    }
    catch(err){
      return err;
    }
  };
  
  const deleteWeight = async (id) => {
    await Weight.findByIdAndDelete(id);
      return 'Deleted!';
    }  
  
  module.exports = {
    getAllWeight,
    getWeightById,
    addWeight,
    updateWeight,
    deleteWeight,
  };