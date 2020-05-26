import {Avatar,Divider,Tooltip,Tag} from 'antd'
import '../static/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="../static/images/stephen_xu.jpg"  /></div>
            <div className="author-introduction">
                菜鸟程序员，专注于WEB和移动前端开发。要成为全栈工程师，正在为此努力中！喜欢Stephen Curry，因此英文名也叫Stephen。
                
                <div>
                    <Tag className="tagAll" color="magenta">斯蒂芬库里迷弟</Tag>
                    <Tag className="tagAll" color="volcano">持续更新狂魔</Tag>
                    <Tag className="tagAll" color="purple">励志成为全栈大牛</Tag>
                    <Tag className="tagAll" color="red">很有趣的人</Tag>
                </div>
                <Divider>社交账号</Divider>
                <Tooltip placement="bottom" title="http://github/Stephen-xu1210">
                     <Avatar size={28} icon="github" className="account" id="accountone" />
                </Tooltip>
                <Tooltip placement="bottom" title="435471845">
                    <Avatar size={28} icon="qq"  className="account"  id="accounttwo"/>
                </Tooltip>
                <Tooltip placement="bottom" title="xzforever">
                     <Avatar size={28} icon="wechat"  className="account"   id="accountthree"/>
                </Tooltip>

            </div>
        </div>
    )

}

export default Author