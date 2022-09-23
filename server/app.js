import http from "http";
import * as env from "dotenv";
import serve from "./middleware/serve-static.js"

env.config()
const PORT = process.env.PORT || 3000
const serverHandler = (req, res) => {
  if(req.url === '/' || req.url === '/index.html') {
    serve(req, res, 'index.html')
  }else if(req.url === "/cars"  || req.url === "/cars.html" ){
    serve(req, res, 'cars.html')
  }else if(req.url.match("\.jpg$") || req.url.match("\.png$") || req.url.match("\.js$") || req.url.match("\.css$")){
    serve(req, res, req.url)
  }else if(req.url === '/get-cars'){
    serve(req, res, "cars.json")
  }else{
    serve(req, res, '404.html')
  }
};


http.createServer(serverHandler).listen(PORT, () => {
  console.info(`Server allready listen for requests on http://localhost:${PORT}`);
});
