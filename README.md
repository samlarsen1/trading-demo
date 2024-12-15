# Trading App Demo

Trading App based on the new REST API of [Trading212](https://www.trading212.com/) - [Trading212 REST API](https://t212public-api-docs.redoc.ly/).  

## Local dev 

All local dependencies installed on a chromebook ubuntu environment using [samlarsen1/chromebook-setup](https://github.com/samlarsen1/chromebook-setup)

```bash
terraform -v # should be v1.10.2+
gcloud -v # SDK should be 505.0.0+
node -v # should be v20.18.0+
npm -v # should be 10.8.2+
```

## Google Cloud Setup



### Set up local gcloud 

```bash
gcloud auth login
gcloud config set project trading-demo-dev
gcloud auth application-default login
```

### Set up project & secret

## Local testing

```bash
# test node within the app folder
cd app
# Pull down the latest secret
node src/utils/fetchSecret.js
# Test API
node tests/testClient.js
```
