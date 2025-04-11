🧪 To Run SCSS Watcher (after npm install -g sass)



npm install -g sass
sass --version

sass --watch src/scss:dist/css

 Step-by-Step to Fix Permissions (Continue from where you are)
1️⃣ Set npm to use the existing folder:

npm config set prefix '~/.npm-global'

2️⃣ Add it to your PATH
Since you're using the bash shell (based on bash-3.2$), run this:


echo 'export PATH=$HOME/.npm-global/bin:$PATH' >> ~/.bash_profile
Then activate the change with:


source ~/.bash_profile
✅ This tells your system where to look for global packages like sass.

3️⃣ Now install Sass again (no sudo needed):

npm install -g sass
4️⃣ Test if it's working:

sass --version