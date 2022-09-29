# client 측 shell script
cd /home/ubuntu/conaz-front

git fetch

local=$(git rev-parse HEAD)
echo $local


target=$(git rev-parse origin/main)
echo $target

if [ $local != $target ]
then
        git stash
        git pull origin master
        echo '풀 완료'
        npm install
        npm run build
        sudo service nginx restart
fi
