import React , { useEffect , useState } from 'react'
import '../static/style/components/header.css'
import Router from 'next/router'
import Link from 'next/link'
import servicePath from '../config/apiUrl'
import {Row,Col, Menu, Icon} from 'antd'
import axios from 'axios'

// const Header = () => (
//   <div className="header">
//     <Row type="flex" justify="center">
//         <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
//             <span className="header-logo">Stphen-Xu</span>
//             <span className="header-txt">专注前端开发,所见即所得。</span>
//         </Col>
       
//         <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
//             <Menu  mode="horizontal">
//                 <Menu.Item key="home">
//                     <Icon type="home" />
//                     首页
//                 </Menu.Item>
//                 <Menu.Item key="video">
//                     <Icon type="youtube" />
//                     视频
//                 </Menu.Item>
//                 <Menu.Item key="life">
//                     <Icon type="smile" />
//                     生活
//                 </Menu.Item>
//             </Menu>
//         </Col>
//     </Row>
//  </div>
// )

const Header = ()=>{
    const [navArray , setNavArray] = useState([])
    useEffect(()=>{

        const fetchData = async ()=>{
           const result= await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    setNavArray(res.data.data)
                    return res.data.data
                }
              )
           setNavArray(result)
        }
        fetchData()

    },[])

    //跳转列表页
    const handleClick = (e)=>{
        if(e.key == 0){
            Router.push('/index')
        }else{
            Router.push('/list?id='+e.key)
        }
    }

    return(
        <div className="header">
            <Row type="flex" justify="center">
                <Col  xs={24} sm={24} md={10} lg={13} xl={11}>
                    <span className="header-logo">
                        <Link href={{pathname:'/index'}}>
                            <a>Stphen-Xu</a>
                        </Link>

                    </span>
                    <span className="header-txt">专注前端开发,所见即所得。</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={10} xl={7}>
                    <Menu  
                      mode="horizontal"
                      onClick={handleClick}
                    >
                        <Menu.Item key="0">
                            <Icon type="home" />
                            博客首页
                        </Menu.Item>
                        {
                           navArray.map((item)=>{
                            return(
                                <Menu.Item key={item.id}>
                                    <Icon type={item.icon} />
                                    {item.typeName}
                                </Menu.Item>
                            )
                           }) 
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header