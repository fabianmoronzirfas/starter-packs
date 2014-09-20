ajax save file (and email if you want)  
==============

This pack needs to be on a server that allows to use php to work propperly. It uses ajax and php to write to a file and send an email.  

You can for example get serverspace at [uberspace.de](https://uberspace.de/).When you are done with setting up your webserver.  
__Hint:__ To use nodejs global modules read [this guide (german)](https://wiki.uberspace.de/development:nodejs)

Login via ssh install bower, clone the repo and install all dependencies.  

    ssh [YOURNAME]@[SERVERNAME].uberspace.de 
    install -g --prefix=$HOME bower
    cd html
    git clone https://github.com/fabiantheblind/starter-packs.git  
    cd starter-packs/ajax-save-file
    bower install

----------

Now go to `http://[YOURNAME].[SERVERNAME].uberspace.de/starter-packs/ajax-save-file/` and hit the button to save a value.  

The values will be saved to a file called `values.txt` in the folder `saved`. You can also send them to yourself as an email. See [this guide](http://php.net/manual/en/function.mail.php) for more explanation.  

