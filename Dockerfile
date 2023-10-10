FROM strongpapazola/ubuntu:template
WORKDIR /app
COPY . .
RUN apt install wget -y; \
wget -qO- https://deb.nodesource.com/setup_17.x | bash -s -- -w; \
apt update; \
apt install nodejs -y; \
node -v; \
npm -v; \
apt install build-essential -y; \
rm -rf node_modules; \
npm install --force;

CMD ["npm","run","start"]
