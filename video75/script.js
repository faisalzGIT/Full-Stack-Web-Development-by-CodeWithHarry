//callbacks 
function loadScript(src,callback){
        let script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
        script.onload = function(){ //Event listener for src loaded
                alert(' hahaha The script did got loaded. This is the given src:' + src  )
                callback(null, src)
        }   
        script.onerror = function(){  //Event listener for error
                alert('The script didn\'t got loaded. Try to correct this given src:' + src  )
                callback(new Error('The script did\'nt got loaded EEE'))
        } 
}


function loadDone(error, src){
        if(error){
                console.log(error);
                return
        }
        console.log('yaaaaay Thhhis script is loaded:' + src);         
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js',loadDone)


// NOW PROMISES