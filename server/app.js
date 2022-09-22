import http from "http";
import * as env from "dotenv";
import serve from "./middleware/node-static.js"

env.config()
const PORT = process.env.PORT || 3000
const serverHandler = (req, res) => {
  if(req.url === '/') {
    serve(req, res, 'index.html')
  }else if(req.url === "/cars"){
    serve(req, res, 'cars.html')
  }else if(req.url.match("\.jpg$") || req.url.match("\.png$") || req.url.match("\.js$") || req.url.match("\.css$")){
    serve(req, res, req.url)
  }else if(req.url === 'get-cars'){
    serve(req, res, "cars.json")
  }else{
    serve(req, res, '404.html')
  }
};


http.createServer(serverHandler).listen(PORT, () => {
  console.info(`server allready listen for requests on port ${PORT}`);
});
