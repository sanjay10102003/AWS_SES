
const AWS = require("aws-sdk");
const env = require("dotenv");
env.config();

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
}

const SES = new AWS.SES(awsConfig)

const createTemplate=()=>{
const params = {
    "Template": {
      "TemplateName": "SecondTemplate",
      "SubjectPart": "Hello {{name}}!",
      "HtmlPart": "<h1>Hello {{name}},</h1><p>This is the HTML part.</p>",
      "TextPart": "This is the text part"
    }
}

SES.createTemplate(params, (err, data) =>  {
  if (err) console.log(err, err.stack); 
  else     console.log(data);           
});
}
module.exports = createTemplate