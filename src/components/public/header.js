import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {message} from 'antd';
import './publicStyle.css';
class Header extends Component {
	constructor() {
		super();
		this.state = {
			country: null
		};
	}

	componentDidMount() {
    message.error("121212")
  }
	render() {
		return (
			<div>
				<div className="top">
					<div className="logo">
						<div className="title">
							<h1>飞鱼教育</h1>
							<h5>专注线上IT教育</h5>
						</div>

						<div />
					</div>
				</div>
				<div className="marginDis">
					<Link to="/Home">首页</Link>
					<Link to="/History">历史记录页</Link>
				</div>
			</div>
		);
	}
}
export default Header;
