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

	componentDidMount() {
  }
	render() {
		const {current}=this.state;
		return (
			<div>
				<div className="top">	
					<div className="topbox">			
						<div className="login">
							<a href="">亲，请登录</a>
						</div>
						<div className="nav">
							<Link onClick={()=>{this.setState({current:1})}}  className={current===1?'active':''} to="/listrecord"  style={{marginRight:"10px"}}>商城首页</Link>
							<Link onClick={()=>{this.setState({current:2})}} className={current===2?'active':''}  to="/shopcart">购物车</Link>
						</div>
					</div> 					  
				</div>
				<div className="logo">
						<div className="title">
							<h1><img src="http://img.alicdn.com/tps/TB1YZkPLpXXXXbzXXXXXXXXXXXX-213-57.png" /></h1>						
						</div>
						<div className="InputTop">
							<Search
								enterButton="搜索"
								type="danger"
								size="large"
								onSearch={(value) => console.log(value)}
							/>
						</div>
					</div>   
			</div>
		);
	}
}
export default Header;
