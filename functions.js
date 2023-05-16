// const https = require('https');

// const crypto = require('crypto');
// // const bcrypt = require('bcrypt');
// const volunteers = require('./models/volunteerModel'); // מאגר המשתמשים
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const checkVolunteerAndPassword = async (volunteerName, password) => {
//   const volunteer = volunteers.find((volunteer) => volunteer.volunteerName === volunteerName);
//   if (!volunteer) {
//     return false; // המשתמש לא נמצא במאגר
//   }
// //   const match = await bcrypt.compare(password, volunteer.password); // השוואת הסיסמאות
// //   if (!match) {
//     const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
//     if (hashedPassword !== user.password) {
//     return false; // הסיסמא שהוזנה לא מתאימה לסיסמא של המשתמש
//   }
//   return true; // שם משתמש וסיסמא מתאימים
// };


// // const crypto = require('crypto');
// // const users = require('./users'); // מאגר המשתמשים

// // const checkUserAndPassword = (username, password) => {
// //   const user = users.find((user) => user.username === username);
// //   if (!user) {
// //     return false; // המשתמש לא נמצא במאגר
// //   }
// //   const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
// //   if (hashedPassword !== user.password) {
// //     return false; // הסיסמא שהוזנה לא מתאימה לסיסמא של המשתמש
// //   }
// //   return true; // שם משתמש וסיסמא מתאימים
// // };