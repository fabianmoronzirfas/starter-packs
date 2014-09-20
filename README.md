Starter Packs for building web stuff right away  
===============================================

This setup assumes that you have a basic knowledge of the command line. If not read for example [this guide](http://mac.appstorm.net/how-to/utilities-how-to/how-to-use-terminal-the-basics/).  

##Getting Started  
###Mac OSX:  

####__automated install__

Open Terminal.app and move where you want to have your project e.g. the Desktop  

    cd ~/Desktop  

Then enter the following lines to download, unzip and move into the folder

    curl -LOk https://github.com/fabiantheblind/starter-packs/archive/master.zip
    unzip master.zip
    cd starter-packs-master


Now we will check if you have [homebrew](http://brew.sh/), [node.js](http://nodejs.org/), [bower](http://bower.io/) and [grunt](http://gruntjs.com/) if not it will install them. If you dont have the Mac OSX command-line tools homebrew will install them as well.
After that it pulls all dependecies with npm And bower.  

    sh installer.sh  

Open one of the projects and start programming gowing. The projects are always organized like this:  

    example
    ├── Gruntfile.js
    ├── assets
    │   ├── css
    │   │   └── styles.css
    │   ├── images
    │   └── js
    │       └── main.js
    ├── bower.json
    ├── index.html
    └── package.json

Write your Javascript in main.js and your CSS in style.js. If you want to install new libraries for example jquery or and bootstrap type:  

    bower install jquery  bootstrap --save

If the library is well organized you can inject them with grunt into your index.html by writing:  

    grunt bower-install


--------  

####__manual install__  

install homebrew:  

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

install node with homebrew:

    brew install node

install bower grunt and http-server

    npm install -g grunt-cli bower

Done.  

To get started with a starter pack run change into the desired folder e.g.  


    cd chartist-js

Then run  

    npm install && bower install  

Now you should be good to go.  


###Windows  

tbd  

##Create a new pack  

###Mac OSX  

type into Terminal in the root of the repo:  

    sh new_pack.sh NAME_OF_YOUR_NEW_PACK



###Windows  

tbd  

##License

The MIT License (MIT)
Copyright © 2014 Fabian Morón Zirfas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



