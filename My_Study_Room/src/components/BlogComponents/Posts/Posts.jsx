import React from "react";
import './Posts.css';
import Post from "../Post/Post"

const Posts = () => {
    const blogPosts = [
        {
            title: "JAVASCRIPT",
      body: `JavaScript is the world most popular 
      lightweight, interpreted compiled programming 
      language. It is also known as scripting 
      language for web pages. It is well-known for 
      the development of web pages, many non-browser 
      environments also use it. JavaScript can be 
      used for Client-side developments as well as 
      Server-side developments`,
      author: "Nishant Singh ",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
        href: 'http://localhost:3000/post1',
    },
    {
      title: "Data Structure ",
      body: `There are many real-life examples of 
      a stack. Consider an example of plates stacked 
      over one another in the canteen. The plate 
      which is at the top is the first one to be 
      removed, i.e. the plate which has been placed 
      at the bottommost position remains in the 
      stack for the longest period of time. So, it 
      can be simply seen to follow LIFO(Last In 
      First Out)/FILO(First In Last Out) order.`,
      author: "Suresh Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
        href: ''
    },
    {
      title: "Algorithm",
      body: `The word Algorithm means “a process 
      or set of rules to be followed in calculations 
      or other problem-solving operations”. Therefore 
      Algorithm refers to a set of rules/instructions 
      that step-by-step define how a work is to be 
      executed upon in order to get the expected 
      results. `,
      author: "Monu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
        href: ''
    },
    {
      title: "Computer Network",
      body: `An interconnection of multiple devices, 
      also known as hosts, that are connected using 
      multiple paths for the purpose of sending/
      receiving data media. Computer networks can 
      also include multiple devices/mediums which 
      help in the communication between two different 
      devices; these are known as Network devices
      and include things such as routers, switches,
      hubs, and bridges. `, 
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
        href: ''
    },
    
    ]

    //Esto no lo entiendo muy bien, se que el map lo que hace es que me va a iterar sobre cada elemento, es decir pasará leyendo sobre cada elemento dentro del blogPosts
    //Las keys, ayudan a identificar cuales elementos fueron cambiados, añadidos o removidos, deberíoan estar dados dentero del array para darle a los elementos una identidad estable. 
    //Los index nos permiten asociar un objeto en una colecction con un cierto numero o index al cual está asociado. similar a un item dentro de un array al cual podemos acceder utilizando un idex
    //Aqui podemos asociar un objeto a un número o index. 
    return (
        <div className="posts-container">
            {blogPosts.map((post,index) => (
                <Post key={index} index={index} post={post} />
            ))}
        </div>
    )
}

export default Posts;