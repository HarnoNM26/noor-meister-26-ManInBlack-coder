** ATTENTION ! ** 

Module A is implemented in main at the moment (Update: operating in main now only and confirming module identifying with specific commit message prefixes, for example: git commit -m "[MODUL-A] message")

** CLIENT **


PACKAGES

1. axios - for doing requests to backend
2. tailwind - simple styling
3. mui/x-charts - for dashboards and charts 
4. mui/x-date - for datepickers start and end range
5. mui/styled-engine - for getting charts styles to work


SETUP 
```
cd client
npm install
npm run dev
```

** SERVER ** 

PACKAGES 

1. express - framework for simplyfing writing backend operations 
2. mysql2 - for database connection
3. kysely - databse querybuilder

SETUP 
```
cd server
npm install
npm run dev
```

** DATABASE ** 

For starting database use: 

```
docker-compose up -d --build 'mysql'
```

MENTION! : Migrations are not working currently


** API Architecture && endpoints ** 

- http: contains controllers
- migration: contains migration insert scripts
- models: contains db querying operations
- routes: contains routes for endpoints
- services: contains business specific logic 
- types: contains type schemas
- utils: contains util functions 

endpoints

- /api/sync/prices
- /api/readings/readings?source=UPLOAD
- /api/health/check


** Client Architecture  ** 

- api: contains API requests
- components: contains components
- views: should contain views
- app.tsx: includes main functionalities and main view at the moment

