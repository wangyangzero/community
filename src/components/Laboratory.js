import React,{Component} from 'react';
import {List,Tag,Card,} from 'antd';
import "./Laboratory.css";

class Laboratory extends Component{
    constructor(props){
        super(props);
        this.state={
            newInfo: [],
        }
    }
    render(){
        const data=[
      {
         place:'东九',
        content:'实验室以模式识别基础理论、图像处理与计算机视觉以及语音语言信息处理为主要研究方向，研究人类模式识别的机理以及有效的计算方法，为开发智能系统提供关键技术，为探求人类智力的本质提供科学依据。成立二十多年来，我们始终将“面向国家战略需求，瞄准国际学科前沿，开展模式识别领域的基础和应用基础研究，建设国际一流的国家重点实验室，使其成为国内外著名的科学研究、技术创新和人才培养基地，为我国信息高科技的发展提供知识、技术与人才储备”作为实验室的发展目标，努力将实验室建设成为一个高水平的、国际化的科研基地。',
         link:"",
        title:'智能计算与模式识别实验室',
         tag:'智能计算',
        color:'yellow',
      },
      {
         place:'东九',
        content:'实验室以模式识别基础理论、图像处理与计算机视觉以及语音语言信息处理为主要研究方向，研究人类模式识别的机理以及有效的计算方法，为开发智能系统提供关键技术，为探求人类智力的本质提供科学依据。成立二十多年来，我们始终将“面向国家战略需求，瞄准国际学科前沿，开展模式识别领域的基础和应用基础研究，建设国际一流的国家重点实验室，使其成为国内外著名的科学研究、技术创新和人才培养基地，为我国信息高科技的发展提供知识、技术与人才储备”作为实验室的发展目标，努力将实验室建设成为一个高水平的、国际化的科研基地。',
         link:"",
        title:'嵌入式实验室',
         tag:'智能计算',
        color:'yellow',
      },
      {
         place:'东九',
        content:'实验室以模式识别基础理论、图像处理与计算机视觉以及语音语言信息处理为主要研究方向，研究人类模式识别的机理以及有效的计算方法，为开发智能系统提供关键技术，为探求人类智力的本质提供科学依据。成立二十多年来，我们始终将“面向国家战略需求，瞄准国际学科前沿，开展模式识别领域的基础和应用基础研究，建设国际一流的国家重点实验室，使其成为国内外著名的科学研究、技术创新和人才培养基地，为我国信息高科技的发展提供知识、技术与人才储备”作为实验室的发展目标，努力将实验室建设成为一个高水平的、国际化的科研基地。',
         link:"",
         tag:'javascript',
        color:'yellow',
        title:'数据与知识工程实验室'
      },
      {
         link:"",
         tag:'java',
        color:'yellow',
        title:'软件测试实验室'
      },
      {
         link:"",
         tag:'python',
        color:'yellow',
        title:'虚拟实验室'
      },
    ]
        return(
            <div className="Laboratory-content">
                <h3>实验室</h3>
                <div className={"contenti"}>
                    <List
                        itemLayout="vertical"
                        size="small"
                        pagination={{
                                    onChange: (page) => {
                                        console.log(page);
                                    },
                                    pageSize: 3,
                                  }}
                        dataSource={data}
                        renderItem={item => (
                             <List.Item>
                             <Card size="small" title={<a href={item.link}>{item.title}</a>} extra={ <Tag color={item.color}>{item.tag}</Tag>} style={{ width: 800 }}>
                              <p>地址：{item.place}</p>
                               <p>实验室介绍：{item.content}</p>
                            </Card>
                               
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}

export default Laboratory;
