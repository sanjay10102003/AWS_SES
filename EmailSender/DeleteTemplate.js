const AWS = require('aws-sdk')
const env = require('dotenv')
env.config()

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
}
const SES = new AWS.SES(awsConfig)

const deleteTemplate = ()=>{
    const params={
        TemplateName:"SecondTemplate"
    }
    SES.deleteTemplate(params, (err,res)=>{
        if(err){
            if (err) console.log(err, err.stack); 
            else    console.log(data);  
        }
    });
}

module.exports = deleteTemplate