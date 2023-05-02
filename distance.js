const https = require('https');

//  //פונקצית מרחק עובדת!!!!
// function getDistance(origin, dest, apiKey) {
//   const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${dest}&key=${apiKey}`;
  
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


//   https.get(url, (res) => {
//     let data = '';

//     res.on('data', (chunk) => {
//       data += chunk;
//     });

//     res.on('end', () => {
//       const result = JSON.parse(data);
//       // console.log(result);
//       // console.log(( result.rows))
      // const {rows} = JSON.parse(data);
      
     
    //         console.log(rows[0].elements[0].distance);
    
      
    //   // עכשיו ניתן לעבד את התוצאה בהתאם לצרכי היישומון שכם.
    // });

//   }).on('error', (err) => {
//     console.log("Error: " + err.message);
//   });
// }

// קריאה לפונקציה עם פרמטרים של כתובת המקור, היעד ומפתח ה-API שלכם.
// getDistance('בני ברק', 'אשדוד', 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM');



/// <summary>
        //עובד חישוב זמן
        // / פונקציה המחזירה את זמן הנסיעה בדקות בין מקום אחד למשנהו
        // / <returns>זמן הנסיעה בדקות</returns>
        // const https = require('https');
        const parseString = require('xml2js').parseString;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        function DistanceInMinutes(PointA, PointB) {
            const url = `https://maps.googleapis.com/maps/api/distancematrix/xml?origins=${PointA}&destinations=${PointB}&mode=driving&units=imperial&sensor=false&key=AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM`;
            return new Promise((resolve, reject) => {
                https.get(url, (res) => {
                    let data = '';
                    res.on('data', (chunk) => {
                        data += chunk;
                    });
                    res.on('end', () => {
                        parseString(data, (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                const duration = result.DistanceMatrixResponse.row[0].element[0].duration[0].value[0];
                                const num = parseInt(duration) / 60;
                                resolve(num);
                            }
                        });
                    });
                }).on('error', (err) => {
                    reject(err);
                });
            });
        }
        // Usage:
        DistanceInMinutes('קרית מלאכי', 'בני ברק').then((result) => {
            console.log(result);
        }).catch((err) => {
            console.error(err);
        });






// //חישוב מרחק ממקום למקום
// const googleMapsClient = require('@google/maps').createClient({
//   key: 'AIzaSyA_IMFHOjVEK-Zdl-xztNALc3hM6J7Ge08'
// });
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const origin = ' תל-אביב,ישראל';
// const destination = 'בני ברק ,ישראל';

// googleMapsClient.distanceMatrix({
//   origins: [origin],
//   destinations: [destination],
//   mode: 'driving',
//   units: 'metric'
// }, (err, response) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
  
//   const distance = response.json.rows[0].elements[0].distance.value;
//   console.log(`The distance between ${origin} and ${destination} is ${distance} meters.`);
// });