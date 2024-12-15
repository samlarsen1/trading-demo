const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config({ path: '../../.env' });

async function accessSecretVersion() {
  const client = new SecretManagerServiceClient();
  const projectId = process.env.GOOGLE_PROJECT_ID; // Read from .env
  const secretName = process.env.GOOGLE_SECRET_NAME; // Read from .env
  const version = 'latest'; // Replace with the version of the secret you want to access

  const [versionResponse] = await client.accessSecretVersion({
    name: `projects/${projectId}/secrets/${secretName}/versions/${version}`,
  });

  const payload = versionResponse.payload.data.toString('utf8');
  const envFilePath = '../../.env';
  const envFileContent = fs.readFileSync(envFilePath, 'utf8');
  const updatedEnvFileContent = envFileContent.replace(/TRADING_API_KEY=.*/, `TRADING_API_KEY=${payload}`);
  fs.writeFileSync(envFilePath, updatedEnvFileContent);
  dotenv.config();
}

accessSecretVersion().catch(console.error);