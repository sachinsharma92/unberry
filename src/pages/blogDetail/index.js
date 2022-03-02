import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Mixpanel } from '../../services/mixpanel';

import './styles.scss'

const BlogDetail = (props) => {

    const { pathname } = useLocation()
    let pathArr = pathname?.split('/')
    let id = pathArr[pathArr?.length - 1]

    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`https://cms-api.unberry.com/api/v1/article/${id}`).then(res => {
            setData(res?.data?.data)
            Mixpanel.track(`Blog Opened: ${res?.data?.data?.heading}`);
            window.dataLayer.push({
                event: 'blogOpened',
                category: 'blog',
                label: res?.data?.data?.heading
            })
        }).catch(e => {
            console.log('blog detail err', e)
        })
    }, [])

    // BacK function
    const navigate = useNavigate();

    return (
        <div className='blog-detail-section'>
            <div className='header-style' style={{ backgroundImage: `url(${data?.bannerImage})` }}>
                <div className='blog-layout'>
                    <a className='btn-back' onClick={() => navigate(-1)}>Back</a>
                    <h2 className='title2'>{data?.heading}</h2>
                </div>
            </div>
            <div className='markdown-layout'>
                {/* <div className="img-round">
                        <img className='img-blog' src={data?.bannerImage} alt={data?.heading} />
                    </div> */}
                <ReactMarkdown className='markdown-style' children={data?.articleContent} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} />,
            </div>
        </div>
    );
};

export default BlogDetail;
