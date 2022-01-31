import Layout from '../../components/Layout/Layout';
import Posts from '../../components/Posts/Posts';
import {useState} from 'react';

export const Display = () => {
    const [data, setData] = useState({});

    return (
        <Layout>
            <div className="layout">
                <Posts />
            </div>
        </Layout>
    )
}