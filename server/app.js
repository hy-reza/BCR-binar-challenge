import http from 'http'


const serverHandler = (req, res) => {
  if (req.url){
    res.end('ok')
  }
}



http.createServer(serverHandler).listen(3000, ()=> { console.info("server allready listen for requests on port 3000"); })