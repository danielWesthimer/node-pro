


const fs = require('fs')
const http = require('http')
var url = require('url');

contacts=[
    { id:1,
     name:"avi",
     number:111
     },
     
    { id:2,
     name:"eli",
     number:222
     },
 
    { id:3,
     name:"yoram",
     number:333
     }
 ]
// http.createServer(function (req, res) {

//     if(req.url==='/sports'){read('/sports')}

//     function read(path){fs.readFile(path, function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data)
//        
//         res.end()
//     })}
// }).listen(8080)







http.createServer(function (req, res) {

    console.log(req.url)
    if(req.url==='/pages'){ res.write('<a href="pages/abaut">abaut</a>   <a href="pages/sports">abaut</a>')}
    
    if(req.url==='/pages/sports'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(fs.readFileSync("sports.html"))};

      if(req.url==='/pages/abaut'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(fs.readFileSync("abaut.html"))}

      if(req.url==='/files'){ res.write('<a href="files/shops">shops</a>   <a href="files/pepole">pepole</a>')}

      if(req.url==='/files/shops'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(fs.readFileSync("shops.html"))};

      if(req.url==='/files/pepole'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(fs.readFileSync("pepole.html"))}

        if(req.url==='/contacts'){
            res.writeHead(200, { 'Content-Type': 'text/html' })
           res.write(fs.readFileSync("contacts.txt"))};
           
            if (req.url.startsWith('/contacts/')){
                console.log(url.parse(req.url).pathname.slice(-1));
              let id = url.parse(req.url).pathname.slice(-1)
               
                 let x =  JSON.stringify(contacts[id-1])
                 res.write(x)
            }
            if(req.url==='/comps'){ res.write('<a href="comps/factory">factory</a>   <a href="comps/prime">primes</a>')}

            if(req.url==='/comps/factory'||req.url==='/comps/prime'){ res.write('<h1>  enter number in url</h1>')}

           
               
                if (req.url.startsWith('/comps/factory/')){
                     
                  let factory = url.parse(req.url).pathname.slice(-1)*1
                  console.log("factory",factory);
                  let y = 1;
                  function factoryFunc(num){
                    for (let i = 1; i <= num; i++) {
                        y *= i
                    }
                }
                factoryFunc(factory);
                myY =String(y)
                console.log("myY",);
                res.write(myY)
            }
            if (req.url.startsWith('/comps/prime/')){
                  let prime = url.parse(req.url).pathname.slice(-1)*1
                  console.log("prime",prime);
                                      let z = false;

                  function primeFunc(num){
                    for (let i = 2; i < num; i++) {
                       for (let j = 1; j <i; j++) {
                        if(i=2||i%j!=0)
                        {z =true}
                        else {z = false;
                         break}
                       }
                    }
                }
                primeFunc(prime);
                let myZ = ""
                console.log("   gf");
                if(z){myZ="prime"}
                else{myZ="not prime"}
                
                res.write(myZ)
            }
        

     res.end(); 

    

}).listen(8080);


console.log("hi");








// http.createServer(function (req, res) {
//     console.log(req.url)
//     if (req.url === '/pages/sports') {read('/pages/sports')}
//         function read(path){
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write(fs.readFileSync(path));

//         //  else if(req.url==='/home11'){res.write(fs.readFileSync("main11.html"))}

//         res.end("jh")};
    
// }).listen(8080);

// console.log("hi");