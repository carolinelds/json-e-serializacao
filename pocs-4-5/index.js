import express, { json } from 'express';
import cors from 'cors';
import o2x from 'object-to-xml';
import YAML from "yaml";

const app = express();
app.use(cors());
app.use(json());

/* POC 4: JS object to XML ---------------------------------*/

var obj = { 
  '?xml version=\"1.0\" encoding=\"iso-8859-1\"?' : null,
  request : {
    '@' : {
      type : 'product',
      id : 12344556
    },
    '#' : {
      query : {
        vendor : 'redhat',
        name : 'linux'
      }
    }
  }
};

console.log(o2x(obj));

/* POC 5: JS object to YAML ---------------------------------*/

const jsonObject = {
    version: "1.0.0",
    dependencies: {
        yaml: "^1.10.0"
    },
    package: {
        exclude: [ ".idea/**", ".gitignore" ]
    }
}

const doc = new YAML.Document();
doc.contents = jsonObject;

console.log(doc.toString());

/* END of POCs ---------------------------------------------------*/


app.listen(5000, () => console.log("Server running on port 5000"));
