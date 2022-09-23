import fs from 'fs';
import mime from 'mime';
import * as pth from 'path';

export default (req, res, path) => {
  const reqType = mime.getType(path)
  let dir = pth.extname(path) === '.json' ? './data/' : './public/'

  try{
    res.writeHead(200, {'Content-Type' :  `${reqType}`})
    const file = fs.readFileSync(`${dir}${path}`)
    res.end(file)
  }catch (error) {
    res.writeHead(400)
    console.error(error.message);
  }
}