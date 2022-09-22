import fs from 'fs';
import mime from 'mime';

export const serveHTML = (req, res, path) => {
  const reqType = mime.getType(req.url)
  res.writeHead(200, {'Content-Type' :  [`${reqType}`]})
  fs.createReadStream(`./public/${path}`, 'utf-8').on('data', (chunk) => {
    res.end(chunk)
  })
}

export const serveX = (req, res, path) => {
  const reqType = mime.getType(path)
  console.log(reqType)
  res.writeHead(200, {'Content-Type' :  `${reqType}`})
  const file = fs.readFileSync(`./public/${path}`)
  res.end(file)
}