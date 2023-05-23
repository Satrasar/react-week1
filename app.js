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

const userId = await getUser(Number);
const post = await getPost(Number);

return userId + post 


}
export default getData;


/*
import axios from 'axios';

export default async function getData(number) {
    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number)

    const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
        posts: posts.map(post => ({
            id: post.id,
            title: post.title,
            body: post.body
        }))
    }

    return userData;
};
*/


/* import axios from "axios";

const getData = async (id) => {
  var data = {};
  await axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      data = { ...data, ...res.data };
    });
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((res) => {
      data = { ...data, posts: [...res.data] };
    });

  return data;
};

export default getData;*/

/*
import axios from "axios";
async function getUserDataById(id) {
  const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const { id: userId, name, username, email, address, phone, website, company } = userResponse.data;
  const posts = postResponse.data;
  const userData = {
    id: userId,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
    posts
  };
  return userData;
}
export default getUserDataById;

*/
