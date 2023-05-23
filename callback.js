//setTimeout(() => {
//    console.log("Selamin aleykum");
// }, 5000);

//setInterval(() => {
//    console.log("Merhaba ben her saniye calisacagim");

//}, 1000);

/*const SayHi = (cb) => {
    cb();
};

SayHi(() => {
    console.log("hello");
} ); 

*/


import fetch from "node-fetch";
import axios from "axios";


/*
fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then ((users) => {
    console.log("Users yuklendi", users);

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(posts => console.log("Postlar yuklendi", posts));//ilk userlari ceksin ondan sonra bu api leri alsin dedigimiz icin .then icine aldik
       
       fetch("https://jsonplaceholder.typicode.com/posts/1")
       .then((data) => data.json())
       .then((data) => console.log("Post 1 yuklendi",data));
        

});
*/

 //eger cok fazla islemim varsa siraya almak icin async await kullanabiliriz.

/*async function getData(){
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();

    console.log("users" ,users);
    console.log("post1" ,post1);
    console.log("posts" ,posts);
}

getData(); 
*/

//Anonim fonksiyon olusturmak icin :
/*(() => {
    console.log("Selam");
})();*/

/*(async() => {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();

    console.log("users" ,users);
    console.log("post1" ,post1);
    console.log("posts" ,posts);
})();
*/
//axios konusu : 
/*(async() => {
    const {data : users} = await axios("https://jsonplaceholder.typicode.com/user");

    const {data : post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");

    const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts");

    console.log("users" ,users);
    console.log("post1" ,post1);
    console.log("posts" ,posts);
})(); */

//Promises
const getUsers = () => {
    return new Promise(async (resolve, reject) => {

        const {data} = await axios("https://jsonplaceholder.typicode.com/users");


       resolve(data);
      // reject("bir hata olustu");
        ;
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {

        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);

        //resolve(data);
        reject("bir sorun daha olustu");
        ;
    });
};

//siraya koymak icin anonim olusturduk
/*(async () => {
//hatayi yakalamak icin try catch kullandik
try {
    const users = await getUsers();
    const post = await getPost(1);
    
    
    console.log(users);
    console.log(post);
}catch(e){
console.log(e);
}
})();
*/



//await getPost(1)
//.then((data) => console.log(data))
//.catch((e) => console.log(e));


Promise.all([getUsers(), getPost(1)])
.then(console.log)
.catch(console.log);