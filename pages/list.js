import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import {Row, Col , List ,Icon ,Breadcrumb ,BackTop} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/index.css'
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
import Link from 'next/link'



const ArticleList = (list) =>{

  const [ mylist , setMylist ] = useState(
    // [
    //   {title:'Taro多端统一框架基础教学（react）',context:'随着微信小程序越来越火，其它平台也都推出了自己的小程序产品（支付宝、快应用、百度、抖音）。小程序最大的特点就是平台能为你提供强大的流量，所以小程序开发变成了前端必会知识。 作为一个从来不想写程序，一心只想泡妹子的程序员，我一直期盼有一种解决方案，可以一次开发，多端运行。这也就是我的学习理念，每多学一点知识，就少些一些代码。期间我尝试Flutter、尝试uni-app、直到我遇到了Taro，我感觉血液在澎湃，多巴胺在快速分泌，又有了开车的心情。 如果你也想一次开发，可以在任何小程序、H5、ReactNative上运行，那赶快上车吧。上车之后一定会给你前所未有的学习体验。'},
    //   {title:'Uni-app多端统一框架教学（vue）',context:'随着微信小程序越来越火，其它平台也都推出了自己的小程序产品（支付宝、快应用、百度、抖音）。小程序最大的特点就是平台能为你提供强大的流量，所以小程序开发变成了前端必会知识。 作为一个从来不想写程序，一心只想泡妹子的程序员，我一直期盼有一种解决方案，可以一次开发，多端运行。这也就是我的学习理念，每多学一点知识，就少些一些代码。期间我尝试Flutter、尝试uni-app、直到我遇到了Taro，我感觉血液在澎湃，多巴胺在快速分泌，又有了开车的心情。 如果你也想一次开发，可以在任何小程序、H5、ReactNative上运行，那赶快上车吧。上车之后一定会给你前所未有的学习体验。'},
    //   {title:'Flutter移动开发-享受原生的乐趣',context:'随着微信小程序越来越火，其它平台也都推出了自己的小程序产品（支付宝、快应用、百度、抖音）。小程序最大的特点就是平台能为你提供强大的流量，所以小程序开发变成了前端必会知识。 作为一个从来不想写程序，一心只想泡妹子的程序员，我一直期盼有一种解决方案，可以一次开发，多端运行。这也就是我的学习理念，每多学一点知识，就少些一些代码。期间我尝试Flutter、尝试uni-app、直到我遇到了Taro，我感觉血液在澎湃，多巴胺在快速分泌，又有了开车的心情。 如果你也想一次开发，可以在任何小程序、H5、ReactNative上运行，那赶快上车吧。上车之后一定会给你前所未有的学习体验。'},
    //   {title:'express框架-轻便快捷的搭建Web服务器',context:'随着微信小程序越来越火，其它平台也都推出了自己的小程序产品（支付宝、快应用、百度、抖音）。小程序最大的特点就是平台能为你提供强大的流量，所以小程序开发变成了前端必会知识。 作为一个从来不想写程序，一心只想泡妹子的程序员，我一直期盼有一种解决方案，可以一次开发，多端运行。这也就是我的学习理念，每多学一点知识，就少些一些代码。期间我尝试Flutter、尝试uni-app、直到我遇到了Taro，我感觉血液在澎湃，多巴胺在快速分泌，又有了开车的心情。 如果你也想一次开发，可以在任何小程序、H5、ReactNative上运行，那赶快上车吧。上车之后一定会给你前所未有的学习体验。'},
    // ]
    list.data
  );

  useEffect(()=>{
    setMylist(list.data)
   })
  

  return (
    <>
      <Head>
        <title>ArticleList</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/index">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <List
                itemLayout="vertical"
                dataSource={mylist}
                renderItem={item => (
                  <List.Item>
                    <div className="list-title">
                    <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                        <a>{item.title}</a>
                      </Link>
                    </div>
                    <div className="list-icon">
                      <span><Icon type="calendar" />{item.addTime}</span>
                      <span><Icon type="folder" />{item.typeName}</span>
                      <span><Icon type="fire" />{item.view_count}</span>
                    </div>
                    <div className="list-context">{item.introduce}</div>  
                  </List.Item>
                )}
              />  
                
            </div>
        </Col>
  
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer/>
      <BackTop/>
   </>
  )

} 

ArticleList.getInitialProps = async (context)=>{

  let id =context.query.id
  const promise = new Promise((resolve)=>{
    axios(servicePath.getListById+id).then(
      (res)=>resolve(res.data)
    )
  })
  return await promise
}

export default ArticleList