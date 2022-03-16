import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Mixpanel } from '../../services/mixpanel'
import { Button } from 'antd'
import DemoForm from '../../components/demoForm'
import LayoutPrimary from '../../common/layoutPrimary'

// Images
import logoTheme from "../../assets/logo-brown.svg"
import arrowNext from "../../assets/icons/arrow-next.svg"


import './styles.scss'

const BlogDetail = (props) => {

	const location = useLocation();


	const { pathname, state } = useLocation()
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
			document.title = `Unberry | ${res?.data?.data?.heading || 'Blog'}`
		}).catch(e => {
			console.log('blog detail err', e)
		})
	}, [])

	// BacK function
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	}, [])


	const seoModifiedHtml = (html) => {
		return `<div itemprop="description">
                ${html}
                </div>`
	}

	return (
		<LayoutPrimary footer>
			<div className='blog-detail-section' itemscope="" itemtype="https://schema.org/BlogPosting">
				<div className='header-style'>
					<div className='blog-layout'>
						<div className='info-section'>
							<Link to="/"><img src={logoTheme} className='logo-white' alt="logo" /></Link>
							<Button type="primary" href="#bookDemo" className='btn-demo'>Book Demo</Button>
						</div>
						<div>
							<a className='btn-back'
								onClick={() => {
									if (state?.backTo) {
										navigate(state?.backTo)
									} else {
										navigate('/')
									}
								}}
							>
								<img src={arrowNext} />Back</a>
							<h2 className='title2' itemprop="headline">{data?.heading}</h2>
						</div>
					</div>
				</div>
				<div className='markdown-layout' itemprop="description">
					{/* <div className="img-round">
                        <img className='img-blog' src={data?.bannerImage} alt={data?.heading} />
                    </div> */}
					<ReactMarkdown className='markdown-style' children={data?.articleContent} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} />,
				</div>
			</div>
			<DemoForm id="bookDemo" />
		</LayoutPrimary>
	);
};

export default BlogDetail;
