import React,{Component} from 'react';
import { Typography,List,Icon,Collapse} from 'antd';
import './WebLog.css'

const { Panel,} = Collapse;
const { Title, Paragraph, } = Typography;
const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};
class WebLog extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
  render(){
        const listData = [
        
            {
                href: 'http://ant.design',
                title: '杂谈 ',
                time:'2019/12/25',
                easy_des:"又荒废了近3个月没有更新，原因无它，惰性而已...",
                description: "又荒废了近3个月没有更新，原因无它，惰性而已。随着移动互联网的兴旺发达，现在使用电脑浏览网页的用户越来越少，大多数需求都在各种手机APP上得到了解决，似乎只有上班摸鱼时才会利用电脑瞎看上一两眼。因此，抛开geek大佬们的刚需不谈，现在依然执着于搭建一个自己的博客，然后绞尽脑汁地产出一些文字，好像已经是一种硬核的爱好和坚持。并且随着年龄的增长和琐事的拖累，曾经活跃的许多博主都渐渐淡出了视野，中文生活博客圈大有日渐消亡之势——当然，这也有可能是由于我与他人鲜有互动，通常只顾自说自话而产生的错觉。",
            },
            {
                href: 'http://ant.design',
                title: '南方 ',
                time:'2019/12/25',
                easy_des:"南方的小城阴雨的冬天没有北方冷...",
                description: "南方的小城阴雨的冬天没有北方冷。每天走在毛毛细雨中，听着周围完全听不懂的口音，有一种恍惚的感觉，但这种置身世外的感觉让内心也难得的平静，能够缓慢而认真地去思考一些问题。人生苦短，终其一生到底应该追求些什么呢。我似乎对物质生活从来都没有太多的执念，穷则独善其身，富也不能妻妾成群。因此也就一直抱着一种尽人事听天命的心态，从来不曾积极上进，也从来不会过分低沉——对于生活，是生死有命；对于工作，是富贵在天。曾以为自己永远是个不羁放纵爱自由的浪子，但见证了许多的俗世纷扰悲欢离合后，却发现打心眼儿里不欣赏混乱的缺乏秩序的生活，竟然也想拥有一份平淡的快乐，还有精神的充盈。原来洒脱只是表象，同样只是个普通的灵魂。",
            },
            {
                href: 'http://ant.design',
                title: '半年志 ',
                time:'2019/12/25',
                easy_des:"日夜兼程，竟然赶上了今年帝都的初雪...",
                description: "日夜兼程，竟然赶上了今年帝都的初雪。窗外大片的雪花簌簌落下，屋内安静得一塌糊涂。我想起了十几天前回到家乡时，迎接我的同样是一场雪，只不过要比这里寒冷许多。",
            },
            {
                href: 'http://ant.design',
                title: '杂谈 ',
                time:'2019/12/25',
                easy_des:"又荒废了近3个月没有更新，原因无它，惰性而已...",
                description: "又荒废了近3个月没有更新，原因无它，惰性而已。随着移动互联网的兴旺发达，现在使用电脑浏览网页的用户越来越少，大多数需求都在各种手机APP上得到了解决，似乎只有上班摸鱼时才会利用电脑瞎看上一两眼。因此，抛开geek大佬们的刚需不谈，现在依然执着于搭建一个自己的博客，然后绞尽脑汁地产出一些文字，好像已经是一种硬核的爱好和坚持。并且随着年龄的增长和琐事的拖累，曾经活跃的许多博主都渐渐淡出了视野，中文生活博客圈大有日渐消亡之势——当然，这也有可能是由于我与他人鲜有互动，通常只顾自说自话而产生的错觉。",
            },
             {
                href: 'http://ant.design',
                title: '杂谈 ',
                time:'2019/12/25',
                easy_des:"又荒废了近3个月没有更新，原因无它，惰性而已...",
                description: "又荒废了近3个月没有更新，原因无它，惰性而已。随着移动互联网的兴旺发达，现在使用电脑浏览网页的用户越来越少，大多数需求都在各种手机APP上得到了解决，似乎只有上班摸鱼时才会利用电脑瞎看上一两眼。因此，抛开geek大佬们的刚需不谈，现在依然执着于搭建一个自己的博客，然后绞尽脑汁地产出一些文字，好像已经是一种硬核的爱好和坚持。并且随着年龄的增长和琐事的拖累，曾经活跃的许多博主都渐渐淡出了视野，中文生活博客圈大有日渐消亡之势——当然，这也有可能是由于我与他人鲜有互动，通常只顾自说自话而产生的错觉。",
            },
        ];
        return(
            <div className="WebLog">
                <h3>博客</h3>
                <List
                    itemLayout="vertical"
                     pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 4,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item>
                        <Typography>
                           <Title level={2}><a href={item.href}>{item.title}</a></Title>
                               <div className="time"><Icon type="canlendar"/>&nbsp;
                             {item.time}</div>
                              <Paragraph>
                               {item.easy_des}
                               </Paragraph>
                       </Typography>
                        <Collapse bordered={false} ><Panel header="阅读全文" style={customPanelStyle}>{item.description}</Panel></Collapse>
                       </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default WebLog;