import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState(null);

    

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
       fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setBlogs(data);
        });
    }, []);

    // const [waxmelts, setWaxmelts] = useState([
    //     {brand: "Better Homes & Garden", Flavor: "Berry Lemonade & Melon", id: 1 },
    //     {brand: "Better Homes & Garden", Flavor: "Caribbean Sea Breeze", id: 2 },
    //     {brand: "Better Homes & Garden", Flavor: "Over the Rainbow", id: 3 },
    //     {brand: "Scent Sationals", Flavor: "Strawberry Crunch", id: 4 },
    //     {brand: "Better Homes & Garden", Flavor: "Sweet Watermelon Buttercream", id: 5 },
    //     {brand: "Carolina", Flavor: "Orange Blossom", id: 6 },
    //     {brand: "Better Homes & Garden", Flavor: "Meyer Lemon Basil", id: 7 },
    //     {brand: "Better Homes & Garden", Flavor: "Line Dried Linen", id: 8 },
    //     {brand: "Better Homes & Garden", Flavor: "Peonies Pansies", id: 9 },
    //     {brand: "Better Homes & Garden", Flavor: "Orange Buttercream Cupcake", id: 10 },
    //     {brand: "Scent Sationals", Flavor: "Strawberry & Cream", id: 11 },
    //     {brand: "Scent Sationals", Flavor: "Fresh Daisy & Lemon", id: 12 },
    //     {brand: "Better Homes & Garden", Flavor: "Berry Lemonade & Melon", id: 13 },
    //     {brand: "Scent Sationals", Flavor: "Passion Fruit Banana", id: 14 },
    //     {brand: "Better Homes & Garden", Flavor: "Mandarin", id: 15 },
    //     {brand: "Carolina", Flavor: "Rain Showers", id: 16 },
    //     {brand: "Better Homes & Garden", Flavor: "White Peach & Daisy", id: 17 }

    // ]);


    // const handleClick = () => {
    //     console.log('hello, ninjas');
    // }

    // const handleClickAgain = (name) => {
    //     console.log('hello ' + name );
    // }

    return ( 
        <div className="home">
           { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
          
            {/* {waxmelts.map((waxmelt) => (
                <div className="blog-preview" key={waxmelt.id}>
                    <h2>{ waxmelt.brand }</h2>
                    <p>{waxmelt.Flavor }</p>
                </div>
            ))} */}
            {/* <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('mario')}>Clicke me again</button>
             */}

        </div>
     );
}
 
export default Home;