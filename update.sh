pushd /var/www/html/bisa-business-new/
./autopull.sh
npm install
systemctl restart bisa-business.service 
popd
