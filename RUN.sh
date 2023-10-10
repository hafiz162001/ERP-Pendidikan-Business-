#!/bin/bash
pushd /var/www/html/bisa-business-website-2
PORT=5100 npm run start
popd
docker run -d -p localhost:8089:5100 --name bisa-business --restart always strongpapazola/ubuntu:bisa_business 
docker run -d -p 127.0.0.1:8089:3000 --name bisa-business --restart always strongpapazola/ubuntu:bisa_business
