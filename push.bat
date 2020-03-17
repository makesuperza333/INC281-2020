cd /D "%~dp0"
git add .
git commit -m "update"
git push -u origin master

start "" https://github.com/drsanti/INC281-2020

TIMEOUT 15
