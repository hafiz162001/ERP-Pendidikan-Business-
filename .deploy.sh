echo "$SSH_KEY" > key.pem
chmod 400 key.pem

HOSTNAME=`hostname` ssh-keygen -t rsa -C "$HOSTNAME" -f "$HOME/.ssh/id_rsa" -P "" && cat ~/.ssh/id_rsa.pub
echo '[*] Execute SSH'
ssh -i key.pem -o "StrictHostKeyChecking no" root@bisa.ai -p 65022 "/var/www/html/bisa-business-new/autobuild.sh"
#echo '[*] Halting Temporary !!!'
