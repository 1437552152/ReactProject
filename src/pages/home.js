import React, { Component } from 'react';

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
				<img src={require('../assets/banner.png')} />

				<div className="load">
					<p>
						系统化学习路径<span>网易云课堂六大课程体系，让学习有章有序</span>
					</p>
					<div className="boxContent">
						<div className="box boxone">
							<p>职场通用技能</p>
							<p>课程体系</p>
						</div>
						<div className="box boxtwo">
							<p>职场通用技能</p>
							<p>课程体系</p>
						</div>
						<div className="box boxthree">
							<p>职场通用技能</p>
							<p>课程体系</p>
						</div>
						<div className="box boxfour">
							<p>职场通用技能</p>
							<p>课程体系</p>
						</div>
						<div className="box boxfive">
							<p>职场通用技能</p>
							<p>课程体系</p>
						</div>
						<div className="box boxsix">
							<p>职场通用技能</p>
							<p>课程体系</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
