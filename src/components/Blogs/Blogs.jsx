import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import Blog from "../Blog/Blog";
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstorage";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [bookMarks, setBookMarks] = useState([]);
    const [markAsRead, setMarkAsRead] = useState(0);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    useEffect(() => {
        if(blogs.length){
            const storedCart = getStoredCart();

            const saveCart = [];
            for(const id of storedCart){
                const blog = blogs.find(blog => blog.id === id)
                saveCart.push(blog);
            }
            setBookMarks(saveCart)
        }
    }, [blogs])

    const handleBookMark = blog => {
        setBookMarks([...bookMarks, blog])
        addToLS(blog.id);
    }

    const handleMarkAsRead = (id, time) => {
        setMarkAsRead(markAsRead + time)

        // remove the read blog from bookmark 
        const remainingBookmark = bookMarks.filter(bookmark => bookmark.id !== id)
        setBookMarks(remainingBookmark);

        removeFromLS(id)
    }

    return (
        <div className="container mx-auto max-w-[1180px] px-5 my-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="col-auto lg:col-span-8">
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                            handleBookMark={handleBookMark}
                            handleMarkAsRead={handleMarkAsRead}>
                        </Blog>)
                    }
                </div>
                <div className="col-auto lg:col-span-4">
                    <Cart bookMarks={bookMarks}
                        markAsRead={markAsRead}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Blogs;