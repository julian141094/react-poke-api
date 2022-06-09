# pull official base image
FROM node:18.2.0-slim

# set working directory
WORKDIR /src
# prepare the container for building react
COPY ./package.json /src/

RUN yarn install

COPY . /src/

# start app
# CMD ["yarn", "run", "start"]