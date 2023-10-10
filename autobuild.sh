#!/bin/bash
pushd $( dirname -- "${BASH_SOURCE[0]}" )
./autopush.sh
docker build -t strongpapazola/ubuntu:bisa_business .
docker stop bisa-business
docker rm bisa-business
docker run -d -p 127.0.0.1:8089:3000 --name bisa-business --restart always strongpapazola/ubuntu:bisa_business
docker push strongpapazola/ubuntu:bisa_business
popd
