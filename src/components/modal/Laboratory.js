import React, {Component} from 'react';
import {List, Descriptions,Avatar,} from 'antd';
//import {Link} from 'react-router-dom'
import './Laboratory.css'

class Laboratory extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
     render(){
       
        const listData = [
            {
                id: '1',
                title: '智能计算与模式识别研究室',
                avatar: "https://i.loli.net/2019/04/06/5ca877e06ed4f.jpg",
                place: "东九A521",
                content: "本实验室通过与信号处理、人工智能、应用数学等相关学科的交流与合作，在智能计算与模式识别的研究和应用开发方面，围绕数值分析、优化算法、图像处理、模式识别等方向中的急需解决的应用基础中的难题开展研究。",
                link:"http://www.cs.swust.edu.cn/lab_ICPR",
            }
            ,
            {
                id: '2',
                title: '嵌入式技术研究室',
                avatar: "https://i.loli.net/2019/04/06/5ca877e06ed4f.jpg",
                place: "东九A521",
                content: "实验室主要进行计算机控制技术和嵌入式系统技术的研究，面向行业应用的嵌入式系统为主要目标。立足于汽车电子，数控机床，医疗设备，物联网技术，核监测技术等相关行业，研究内容涉及嵌入式基础平台，嵌入式实时操作系统，嵌入式中间件软件开发，设备驱动开发。本实验室拥有完善的高端ARM嵌入式开发系统，功能强大的DSP开发平台和FPGA开发平台， 其中部分开发平台属完全自主开发。拥有完整的硬件开发验证设备，包括BGA器件焊接平台，拆焊台，数字存储示波器，任意波形信号发生器，逻辑分析仪，LCR测试仪，高精密数字电源，高温实验箱等。",
                link:"http://www.cs.swust.edu.cn/lab_embed",
               
            },
            {
                id: '3',
                title: '数据与知识工程研究室',
                avatar: "https://i.loli.net/2019/04/06/5ca877e06ed4f.jpg",
                place: "东九A521",
                content: "实验室成立于1999年，经过10余年的发展，形成了稳定的研究方向和研究队伍，承担了多项国家级、省部级项目，拥有发明专利1项，登记软件著作权12项。目前主要围绕数据与知识的获取、管理、保存、服务方面开展应用基础及知识工程系列产品研发等工作，为地方企事业单位开发了与知识工程密切相关的大型应用软件。目前团队有固定研究人员19人，其中教授4人，副教授5人，博士3人，在读研究生10余名。实验室最近三年毕业研究生、本科生大多就业于腾讯、阿里巴巴、新浪微博、奇虎360、PPLive、去哪儿网、国家互联网应急处理中心等著名IT企事业单位。",
                link:"http://www.cs.swust.edu.cn/lab_dke",
               
            },
            {
                id: '4',
                title: '虚拟现实与可视化实验室',
                avatar: "https://i.loli.net/2019/04/06/5ca877e06ed4f.jpg",
                place: "东九A521",
                content: "虚拟现实与可视化实验室依托西南科技大学计算机科学与技术学院，是西南科技大学董事单位共建研究实验室。研究室以“产学研用”的发展思路，以求实、发展、竞争与开放的精神，在计算机图形学、图像及视频处理、人机交互、人工智能等领域开展科学研究工作和硕士研究生培养工作。并通过与控制、材料、物理、数学等不同学科方向的合作、交叉，开展虚拟现实基础、应用基础、关键技术方面的原始创新和集成创新。",
                link:"http://www.swustvis.cn/contact.html",
               
            },
        ];
        return(
            <div className={"TP"}>
                <div className={"content"}>
                    <div className={"header"}>
                <Avatar src="https://i.loli.net/2019/04/05/5ca73d2207d3c.jpg" size={64}/>
                <span>实验室板块</span>
                    </div>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                        >
							<Descriptions bordered={true}  title={<a href={item.link}>{item.title}</a>}>
							 <Descriptions.Item label="地址：">{item.place}</Descriptions.Item>
							    <Descriptions.Item label="实验室介绍：" >
							     {item.content}
							    </Descriptions.Item>
							  </Descriptions>,
                        </List.Item>
                    )}
                />
                </div>
                
            </div>
        )
    }
}

export default Laboratory;