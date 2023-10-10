#!/bin/bash
cp bisa-business.service /etc/systemd/system
sed -i "s/PATH/$(pwd)/g" bisa-business.service
systemctl enable bisa-business.service
systemctl start bisa-business.service
cp dev.bisa.business.conf /etc/nginx/sites-enable/
echo "[*] BUAT SSL"
certbot certonly -d dev.bisa.business --standalone
service nginx restart
