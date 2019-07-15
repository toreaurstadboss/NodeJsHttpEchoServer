#### Node.js HTTP Echo service

This is a simple repository that shows how you can create a simple HTTP Echo service in Node.js

To start the application run:
npm install
npm start

Now use for example curl and run:

<code>
curl -d "Hello? Is this dog?" http://localhost:8081
</code>

The curl command should get echoed back the posted request message to the HTTP server.