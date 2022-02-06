import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import './styles.scss'

const BlogDetail = (props) => {
    const {pathname} = useLocation()
    let pathArr = pathname?.split('/')
    let id =  pathArr[pathArr?.length - 1]

    const [data, setData] = useState({})

    useEffect(()=>{
        axios.get(`https://cms-api.unberry.com/api/v1/collection/${id}`).then(res=>{
            setData(res?.data?.data)
        }).catch(e=>{
            console.log('blog detail err', e)
        })
    },[])
  return (
    <div>
        <h3>{data?.title}</h3>
        <img src={data?.mainPictureURL} alt={data?.title} />
        <p>{data?.description}</p>
    </div>
  );
};

export default BlogDetail;
