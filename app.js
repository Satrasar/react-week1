import axios from "axios";


async function getData(Number){

const getUser = async(Number) => {
    const {data} = await axios("https://jsonplaceholder.typicode.com/users/" + Number);

    console.log(data);
   
}

const getPost = async(Number) =>{
    const {data} = await axios("https://jsonplaceholder.typicode.com/posts?id=" + Number);
     
    console.log(data);
}

const userId = await getUser(Number)
const post = await getPost(Number)

return userId + post 


}
export default getData;