/*
  // using the express session middleware
  app.use(session({  
  secret: 'youruniquesecret', // secret string used in the signing of the session ID that is stored in the cookie
  name: 'youruniquename', // set a unique name to remove the default connect.sid
  cookie: {
    httpOnly: true, // minimize risk of XSS attacks by restricting the client from reading the cookie
    secure: true, // only send cookie over https
    maxAge: 60000*60*24 // set cookie expiry length in ms
  }
  }));
*/

/*
  try {
  // asynchronously generate a secure password using 10 hashing rounds
    const hash = await bcrypt.hash('myPassword', 10);
    // Store secure hash in user record

    // compare a provided password input with saved hash
    const match = await bcrypt.compare('somePassword', hash);
    if (match) {
    // Passwords match
    } else {
    // Passwords don't match
    } 
  } catch {
    logger.error('could not hash password.')
  }
*/

/*
  const cluster = require('cluster');
  const http = require('http');
  const numCPUs = require('os').cpus().length;

  if (cluster.isMaster) {
      console.log(`Master ${process.pid} is running`);

      // Fork workers.
      for (let i = 0; i < numCPUs; i++) {
          cluster.fork();
      }

      cluster.on('exit', (worker, code, signal) => {
          console.log(`worker ${worker.process.pid} died`);
      });
  } else {
      // Workers can share any TCP connection
      // In this case it is an HTTP server
      http.createServer((req, res) => {
          res.writeHead(200);
          res.end('hello world\n');
      }).listen(8000);

      console.log(`Worker ${process.pid} started`);
  }
*/
