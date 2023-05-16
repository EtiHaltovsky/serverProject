const newRequests = require('../models/newRequestsModel');

// const NewRequestSchema = new mongoose.Schema({
//     // תיאור נוסף של השדות שלך
//   });
  
//   const NewRequestModel = mongoose.model('NewRequest', NewRequestSchema);
  
//   // שליפת הנתונים האחרונים מהעמודה האחרונה
//   NewRequestModel.findOne({}, {}, { sort: { _id: -1 } })
//     .then(lastRequest => {
//       console.log(lastRequest.newField); // שם השדה האחרון שתרצה לשלוף
//       // עיבוד הנתונים כאן
//     })
    // .catch(error => {
    //   console.error('Failed to fetch last request:', error);
    // });

  const getAllnewRequests = async () => {
    try {
      const re = await newRequests.find();
      return re
    }
    catch(err) {
      return err
    }
  };
  
  const getNewRequestsById = ( id ) => {

    // ewRequestModel.findOne({}, {}, { sort: { _id: -1 } })
    // .then(lastRequest => {
    //   console.log(lastRequest.date); // שם השדה האחרון שתרצה לשלוף
    //   // עיבוד הנתונים כאן
    // })
    return newRequests.findById(id);
  };
  
  
  const addnewRequests = async (obj) => {
    try{
      const r = new newRequests(obj);
      await (r.save())
      return r;
    }
    catch(err){
      return err;
    }
  };
  
  const updatenewRequests = async (obj) => {
    console.log("obj", obj)
    try{
      await newRequests.findByIdAndUpdate(obj._id.toJSON('new ObjectId'), obj);
      return "Updated!"
    }
    catch(err){
      return err;
    }
  };
  
  const deletenewRequests = async (id) => {
    await newRequests.findByIdAndDelete(id);
      return 'Deleted!';
    }  
  
  module.exports = {
    getAllnewRequests,
    getNewRequestsById,
    addnewRequests,
    updatenewRequests,
    deletenewRequests,
  };