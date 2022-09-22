import http from "http";
import * as env from "dotenv";
import {serveHTML, serveX} from "./middleware/node-static.js"

env.config()
const PORT = process.env.PORT || 3000
const HOSTNAME = process.env.HOSTNAME || "localhost"

const serverHandler = (req, res) => {
  if(req.url === '/') {
    serveHTML(req, res, 'index.html')
  }else if(req.url === "/cars"){
    serveHTML(req, res, 'cars.html')
  }else if(req.url.match("\.jpg$") || req.url.match("\.png$") || req.url.match("\.js$")){
    serveX(req, res, req.url)
  }else{
    serveHTML(req, res, '404.html')
  }
};


http.createServer(serverHandler).listen(PORT, HOSTNAME, () => {
  console.info(`server allready listen for requests on port ${PORT}`);
});
