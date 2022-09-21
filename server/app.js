import http from 'http'



const app = http.createServer((req, res) => {
  res.end('ok')
})

app.listen(3000, ()=> {
  console.info("server allready listen for requests on port 3000");
})