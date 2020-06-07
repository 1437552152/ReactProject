import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { message, Input, Select } from 'antd';
import './publicStyle.less';
const { Search } = Input;
const { Option } = Select;
class Header extends Component {
	constructor() {
		super();
		this.state = {
      current:1
		};
	}

	componentDidMount() {}
  render() {
    const fuli =require('../../assets/images/fuli.png');
    const download =require('../../assets/images/download.png')
    const huiyuan =require('../../assets/images/huiyuan.png')
    const shipin =require('../../assets/images/shipin.png')
    

    const {current}=this.state;
		const selectBefore = (
			<Select defaultValue="课程" className="select-before">
				<Option value="课程">课程</Option>
				<Option value="学习">学习</Option>
			</Select>
		);
		return (
			<div>
				<div className="top">
					<div className="logo">
						<div className="title">
							<h1>飞鱼教育</h1>
							<h5>专注线上IT教育</h5>
						</div>
						<div className="InputTop">
							<Search
								addonBefore={selectBefore}
								placeholder="行家专业亲授"
								enterButton="搜索"
								size="large"
								onSearch={(value) => console.log(value)}
							/>
						</div>
           {/*  <div className="ButtonGroup">
							<div className="myStudy">
                 <Link to="/"> 我的学习</Link>
              </div>
					</div> */}
					</div>
				</div>
				<div className="marginDis">
				<div className="left">	<Link onClick={()=>{this.setState({current:1})}} to="/Home" className={current===1?'active':''}>首页</Link>
					<Link onClick={()=>{this.setState({current:2})}} className={current===2?'active':''} to="/History">历史记录页</Link></div>
		  {/*    <div className="right">
            <p>
              <a href=""><img src={fuli} />关注领福利</a>
            </p>
            <p>
              <a href=""><img src={download} />下载中心</a>
            </p>
            <p>
              <a href=""><img src={huiyuan} />会员中心</a>
            </p>
            <p>
              <a href=""><img src={shipin} />热榜视频</a>
            </p>
    		</div> */}
        	</div>
			</div>
		);
	}
}
export default Header;
