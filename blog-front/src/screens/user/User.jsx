import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Layout/Layout'
import { getBlog } from '../../services/blogs';

export default function User() {
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams;
  console.log(id);
  useEffect(() => {
    const fetchBlogs = async () => {
      const total = await getBlog(`/${id}/blogs`);
      setBlogs(total.data)
    };
    fetchBlogs();
  }, []);
  return (
    <div>
      <Layout>
        <div>
          {blogs?.blogs?.blogs.map((blogs) => {
            return (
              <div key={blogs._id}>
                <h2>{`${blogs.userName}`}</h2>
                <p>{postMessage.content}</p>
              </div>
            )
          })}
        </div>
      </Layout>
    </div>
  );
}