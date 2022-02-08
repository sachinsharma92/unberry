import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './styles.scss'

const BlogDetail = (props) => {

    const { pathname } = useLocation()
    let pathArr = pathname?.split('/')
    let id = pathArr[pathArr?.length - 1]

    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`https://cms-api.unberry.com/api/v1/article/${id}`).then(res => {
            setData(res?.data?.data)
        }).catch(e => {
            console.log('blog detail err', e)
        })
    }, [])

    // BacK function
    const navigate = useNavigate();

    return (
        <div className='blog-detail-section'>
            <div className='blog-layout'>
                <a className='btn-back' onClick={() => navigate(-1)}>Back</a>
                <div>
                    <h2 className='title2'>{data?.heading}</h2>
                    <div className="img-round">
                        <img className='img-blog' src={data?.bannerImage} alt={data?.heading} />
                    </div>
                    <p className='description' dangerouslySetInnerHTML={{ __html: data?.articleContent }}></p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
