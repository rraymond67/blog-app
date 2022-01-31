import {useParams} from 'react-router-dom';
import {getBlog} from '../../services/blogs';
import {useState, useEffect} from 'react';
import './Blogs.css';

export const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const {id} = useParams;
    console.log(id);
    useEffect(() => {
        const fetchBlogs = async () => {
            const total = await getBlog;
            setBlogs(total.data)
        };
        fetchBlogs();
    }, []);
    return (
        <div className="blog-container">
            {blogs.map((blog) => {
                if (blog?.blogs.length > 0) {
                    return (
                        <div key={blog._id} className="post-components">
                            <h2>{`${blog.userName}`}</h2>
                            <p>{blog.content}</p>
                        </div>
                    )
                } else {
                    return <h2>No Content</h2>
                }
            })}
        </div>
    )
}