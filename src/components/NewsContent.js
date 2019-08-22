import React,{Component} from 'react';
import './NewsContent.css';
import { Typography, Divider,Avatar,Button,Descriptions,List} from 'antd';

const { Title, Paragraph, Text} = Typography;
class NewsContent extends Component{
    constructor(props){
        super(props);
        this.state = {
         
        }
    }
    render(){
    	   const data = [
            {
                time: '2019/4/6',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca88103c0bca.jpg",
                content:"你也可以使用WaterFallList实现，看Readme和examples就知道了 ，还有效果图",
            },
            {
                time: '2019/4/5',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca88104017ab.jpg",
                content:"初学者不要自己配置 开发环境, 直接从 expo开始, 这样会简单很多.",
            },
            {
                time: '2019/4/4',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca88104980da.jpg",
                content:" 确实是jdk的版本关系，你echo %JAVA_HOME%看一下版本",
            },
            {
                time: '2019/4/3',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca881051c6a7.jpg",
                content:"你是怎么解决的,我试了很多次都不能成功",
            },
            {
                time: '2019/4/2',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca88294c3415.jpg",
                content:"如何在android原生端获取到react native中的某个view",
            },
        ];
    	return(
    			<div className="NewsContent">
    				<div className="NewsContent_content">
    				     <div  className="inner_content">
	    					 <Typography>
							    <Title level={2}>关于JavaScript数组方法三板斧，100%的开发都得知道</Title>
							    <Paragraph>
							      2019年08月18日&nbsp;&nbsp;14:44:55&nbsp;&nbsp;读芯术&nbsp;&nbsp;阅读数: 987
							    </Paragraph>
							    <hr/>
							    <Paragraph>
							    	5G和区块链是两种潜在的颠覆性技术，会塑造科技和电信的未来。预计到2020年，5G将覆盖全球。那么，5G技术加区块链，未来的世界会有什么改变呢？
							    	<br /><br />
       								 5G、区块链与物联网设备相连接，能为社会增添巨大价值。本文将简要介绍这些技术的好处、展现的可能性，以及必须要克服的挑战。

									<br/><br />
									<b>当物联网遇上5G技术和区块链</b>
									<br /><br />

									几年来，专家们早已注意到物联网的潜力。然而，两大瓶颈限制了它的发展：安全和容量。但如果连入5G网络，物联网设备就可以获得更加广泛的应用。

									<br /><br />
									<b>物联网需要高速度、低延迟的网络</b>

									<br /><br />
									延迟是指信号从发出到接收的时间间隔。低延迟对设备而言非常重要，可确保快速沟通，避免明显滞后。

									<br /><br />
									降低延迟对技能网(IoS)而言也非常关键，因为专家们需要使用虚拟现实耳机远程工作。要使技能网这一想法成真，低延迟的网络就尤为重要。

									<br/><br />
									较4G网络而言，5G网络传输数据的速度更快、延迟更少。因此，物联网能发挥最大潜能。
							    </Paragraph>
						     </Typography>
					     </div>
    				</div>
    				<div className="NewsContent_sidebar">
    				     <div id={"upToDateMessage"}><h4 className={"homepage-sideBar-message"}>最新留言</h4></div>
		                    <div className={"homepage-sideBar-userMessage"}>
		                    <List
		                        itemLayout="horizontal"
		                        dataSource={data}
		                        renderItem={item => (
		                            <List.Item>
		                                <List.Item.Meta
		                                    avatar={<Avatar src={item.avatar} />}
		                                    title={<a href={item.link}>{item.time}</a>}
		                                    description={item.content}
		                                />
		                            </List.Item>
		                        )}
		                    />
		                    </div>
    				</div>
    			</div>
    		)
    }

}
export default NewsContent;