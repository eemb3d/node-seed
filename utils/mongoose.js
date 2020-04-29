// let mongoose = require('mongoose');

// module.exports = {
//     init: async () => {
//         const MONGO_HOST = escape(process.env.DB_HOST);
//         const MONGO_USENAME = escape(process.env.DB_USER);
//         const MONGO_PASSWORD = escape(process.env.DB_PASS);
//         const MONGO_PORT = escape(process.env.DB_PORT);
//         const MONGODB_URI = 'mongodb://' + MONGO_USENAME + ':' + MONGO_PASSWORD + '@' + MONGO_HOST + ':' +  MONGO_PORT + '/';

//         mongoose.connect( MONGODB_URI, { useNewUrlParser: true });

//         // May still be needed if global.Promise was assigned with another implementation
//         // Check deprecation warning
//         mongoose.Promise = global.Promise;

//         mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
//     }
// }