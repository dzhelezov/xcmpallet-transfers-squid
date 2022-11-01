import fs from 'fs'
import {BigQuery} from '@google-cloud/bigquery'

// TODO: create auth file from ENV variables

const keyData = `
{
    "type": "service_account",
    "project_id": "${process.env.GOOGLE_PROJECT_ID}",
    "private_key_id": "${process.env.GOOGLE_PRIVATE_KEY_ID}",
    "private_key": "-----BEGIN PRIVATE KEY-----\\n${process.env.GOOGLE_PRIVATE_KEY}\\n-----END PRIVATE KEY-----\\n",
    "client_email": "${process.env.GOOGLE_CLIENT_EMAIL}",
    "client_id": "${process.env.GOOGLE_CLIENT_ID}",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "${process.env.GOOGLE_CLIENT_X509_CERT_URL}"
  }  
`

fs.writeFileSync(`${__dirname}/../assets/private-key.json`, keyData)
process.env.GOOGLE_APPLICATION_CREDENTIALS=`${__dirname}/../assets/private-key.json` 

export const bigQuery = new BigQuery();
