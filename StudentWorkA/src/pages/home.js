import React, { Component } from 'react';
import { Carousel } from 'antd';
import "./home.less";
export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			country: null
		};
	}

	componentDidMount() {}
	render() {
		return (
			<div className="test">
          <Carousel autoplay>
    <div>
       <img src={require('../assets/banner.png')} />
    </div>
    <div>
    <img src={require('../assets/banner.png')} />
    </div>
    <div>
    <img src={require('../assets/banner.png')} />
    </div>
    <div>
    <img src={require('../assets/banner.png')} />
    </div>
  </Carousel>
			

				<div className="load">
					<p  className="title">
						系统化学习路径<span>网易云课堂六大课程体系，让学习有章有序</span>
					</p>
					<div className="boxContent">
						<div className="box boxone">
							<p>职场通用技能</p>
							<p>课程体系</p>
						</div>
						<div className="box boxtwo">
							<p>编程与开发</p>
							<p>课程体系</p>
						</div>
						<div className="box boxthree">
							<p>AI与数据科学</p>
							<p>课程体系</p>
						</div>
						<div className="box boxfour">
							<p>产品与运营</p>
							<p>课程体系</p>
						</div>
						<div className="box boxfive">
							<p>设计创意</p>
							<p>课程体系</p>
						</div>
						<div className="box boxsix">
							<p>电商运营</p>
							<p>课程体系</p>
						</div>
					</div>
				</div>

<div className="project">
	<div className="guide">
		<span>课堂预约</span>
		<span>
			<a>更多</a>
		</span>
	</div>
	<div className="list">
		<ul>
			<li>
				<div>
					<img alt="" src={[require("../assets/images/photoone.png")]}/>
				</div>
				<div>
					<p>10月14日20：00|<span className="warning">开启提醒</span></p>
					<p>python技巧大揭秘：【python基础讲解】</p>
					<p>张小鱼儿 前端工程师</p>
				</div>
			</li>
			<li>
				<div>
					<img alt="" src={[require("../assets/images/photoone.png")]}/>
				</div>
				<div>
					<p>10月14日20：00|<span className="warning">开启提醒</span></p>
					<p>python技巧大揭秘：【python基础讲解】</p>
					<p>张小鱼儿 前端工程师</p>
				</div>
			</li>
			<li>
				<div>
					<img alt="" src={[require("../assets/images/photoone.png")]}/>
				</div>
				<div>
					<p>10月14日20：00|<span className="warning">开启提醒</span></p>
					<p>python技巧大揭秘：【python基础讲解】</p>
					<p>张小鱼儿 前端工程师</p>
				</div>
			</li>
			<li>
				<div>
					<img alt="" src={[require("../assets/images/photoone.png")]}/>
				</div>
				<div>
					<p>10月14日20：00|<span className="warning">开启提醒</span></p>
					<p>python技巧大揭秘：【python基础讲解】</p>
					<p>张小鱼儿 前端工程师</p>
				</div>
			</li>
			<li>
				<div>
					<img alt="" src={[require("../assets/images/photoone.png")]}/>
				</div>
				<div>
					<p>10月14日20：00|<span className="warning">开启提醒</span></p>
					<p>python技巧大揭秘：【python基础讲解】</p>
					<p>张小鱼儿 前端工程师</p>
				</div>
			</li>
			<li>
				<div>
					<img alt="" src={[require("../assets/images/photoone.png")]}/>
				</div>
				<div>
					<p>10月14日20：00|<span className="warning">开启提醒</span></p>
					<p>python技巧大揭秘：【python基础讲解】</p>
					<p>张小鱼儿 前端工程师</p>
				</div>
			</li>
			<div className="clearfix"></div>
		</ul>
	</div>
</div>

			</div>
		);
	}
}
