function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(src);
    };
    script.onerror = () => {
      reject(new Error('Hey its me Error'));
    };
  });
}

// script.onload = function(){ //Event listener for src loaded
//         alert(' hahaha The script did got loaded. This is the given src:' + src  )
//         callback(null, src)
// }
// script.onerror = function(){  //Event listener for error
//         callback(new Error('The script did\'nt got loaded EEE'))
// }

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js");

p1.then((value) => {
  alert(" hahaha The script did got loaded. This is the given src:" + src);
}).catch((error) => {
  alert("The script didn't got loaded. Try to correct this given src:" + error);
});
