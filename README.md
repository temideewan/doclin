# Doclin

Tutorial: https://www.youtube.com/watch?v=a5DX5pQ9p5M&t

# To Run

## First run api:

1. Fill up .env file with github app credentials
2. Use a random string for ACCESS_TOKEN_SECRET
3. Install postgres and create a database named doclin
4. npm run watch
5. npm run dev

## To run extension 

1. go to RUN > Debug. Or simply hit F5


## To Release in VSC
1. Increase the version number in package.json under api and extension.
2. Run npm i to update the package-lock.json.
3. merge the branch to main first.
4. then create a merge from main with branch name : `release-VERSION_NUMBER`
5. create a PR against the prod branch and merge it.
6. naviagte to vsc marketplace to confirm the publish.

