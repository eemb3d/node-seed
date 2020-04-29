// const MongoClient = require('mongodb').MongoClient;

// module.exports = {
//     init: async () => {
//         const MONGO_HOST = escape(process.env.DB_HOST);
//         const MONGO_USENAME = escape(process.env.DB_USER);
//         const MONGO_PASSWORD = escape(process.env.DB_PASS);
//         const MONGO_PORT = escape(process.env.DB_PORT);

//         const MONGODB_URI = 'mongodb://' + MONGO_USENAME + ':' + MONGO_PASSWORD + '@' + MONGO_HOST + ':' +  MONGO_PORT + '/';

//         await MongoClient.connect( MONGODB_URI );
//     }
// }


/*
    // module.exports = {
    //   client: async () => {

    //     const MONGO_HOST = escape(process.env.DB_HOST);
    //     const MONGO_USENAME = escape(process.env.DB_USER);
    //     const MONGO_PASSWORD = escape(process.env.DB_PASS);
    //     const MONGO_PORT = escape(process.env.DB_PORT);
    //     const MONGODB_URI = 'mongodb://' + MONGO_USENAME + ':' + MONGO_PASSWORD + '@' + MONGO_HOST + ':' +  MONGO_PORT + '/';

    //     const client = await MongoClient.connect( MONGODB_URI );

    //     return client;
    //   },

    //   connect: async (req, res, next) => {
    //     const client = await module.exports.client();
    //     req.client = client;
    //     req.db = client.db('database_name');
    //     next();
    //   },

    //   disconnect: async (req, res, next) => {
    //     req.client.close();
    //     next();
    //   }
    // };
*/