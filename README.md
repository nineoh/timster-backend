# timster-backend
Node.js backend of the timster app.

## Run local
Create a new file called _.env_.

Add *MONGODB_URI* to your local .env settings

run `heroku config:get MONGODB_URI -s  >> .env`

Start the local backend

run `heroku local`
