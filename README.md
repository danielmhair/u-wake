# uWake

A nice combination for an api and app.

I started by adding config for using docker for my db and node (see docker-compose.yml, Dockerfile, and package.json)

I then added NestJS:
```
npm i -g @nestjs/cli
nest new api
cd api
npm start

# It worked
```

Then I moved in logic from an example related to typeorm so that its easy to work with the postgres db. I also added angular.

I then learned about how typeorm uses migrations. I don't need migrations for now since its the beginning and temporarily using synchronize: true, but will use it eventually. That being said, I decided to use it to populate dummy data, for now.

```
npm run typeorm:create-migration --name=PopulateData
```

Then updated the file it generated and now added that file to TypeOrmModule.forRoot options with `migrations: [PopulateData1674432771960],`.

### Todo:
- Move over logic from u-awake
- Add tests for api to make sure all services are working and models are setup
- Begin laying out next pieces


### Completed:
- Used the following to add angular and material to nrwl framework
  - npx nx add @nrwl/angular
  - npx nx add @angular/material
- Moved needed logic from alarm-blocks and food4all app
- Added google login through @abacritt/angularx-social-login
- Added portals for logging in and logging out
- Fixed compiler bugs
- Added all models for application
