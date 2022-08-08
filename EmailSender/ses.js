const AWS = require("aws-sdk");
const env = require("dotenv");
env.config();

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
}

const SES = new AWS.SES(awsConfig)
const sendEmail = async ()=>{
    const email = process.env.FROM_EMAIL

    try {
        const params = {
            Source: email,
            Destination: {
                ToAddresses: <email>
            },
            Template: 'SecondTemplate',
            TemplateData: '{ \"name\":\"<name>\"}'

        }

        const emailSent = await SES.sendTemplatedEmail(params).promise();
        emailSent
        .then(data =>{
            console.log("Email sent Successfully",data);
        })
        .catch(err =>{
            console.log(err)
        }
        );

    } catch (error) {
        console.log(error)   
    }
};

module.exports = sendEmail
