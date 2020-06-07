import React, { Component } from 'react';
import "./listrecord.less";
export default class Listrecord extends Component {
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
               <div className="shoplist">
			  <ul>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothes.png")]}/>
					  </div>
					  <div className="produce">作梦家秋季新款原创设计薄款</div>
					  <div className="price">促销价<span>￥188</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothone.png")]}/>
					  </div>
					  <div className="produce">
                       小蓝象喜眠hinos儿童排汗面料速干内衣男女宝宝睡衣套装
                        </div>
					  <div className="price">促销价<span>￥398</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothtwo.png")]}/>
					  </div>
					  <div className="produce">
        
        PawinPaw卡通小熊童装2020年新款冬季女童连帽</div>
					  <div className="price">促销价<span>￥479</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/cloththree.png")]}/>
					  </div>
					  <div className="produce">2019新款网红童装冬装夹棉女孩长款风衣洋气儿童上衣
      </div>
					  <div className="price">促销价<span>￥118</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothfour.png")]}/>
					  </div>
					  <div className="produce">欧美新款夏季v领潮牌冰丝半袖男体恤衫韩版潮流上衣服
      </div>
					  <div className="price">促销价<span>￥298</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothfive.png")]}/>
					  </div>
					  <div className="produce">潮牌韩版衣服装2020新款修身潮流纯棉翻领保罗polo衫
      </div>
					  <div className="price">促销价<span>￥328</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothsix.png")]}/>
					  </div>
					  <div className="produce">男士翻领修身韩版潮流夏季POLO衫男潮牌商务轻奢保罗
      </div>
					  <div className="price">促销价<span>￥328</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothseven.png")]}/>
					  </div>
					  <div className="produce">男夏季大码宽松港风潮牌2020新款半袖潮流ins男士衣服
      </div>
					  <div className="price">促销价<span>￥39</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clotheight.png")]}/>
					  </div>
					  <div className="produce">V领2019夏季新款韩版潮牌纯棉半袖体桖潮流修身男装
      </div>
					  <div className="price">促销价<span>￥188</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothnine.png")]}/>
					  </div>
					  <div className="produce">
        
        香港潮牌简约刺绣港风Polo衫字母拼接修身翻领短袖男日系纯色</div>
					  <div className="price">促销价<span>￥188</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothes.png")]}/>
					  </div>
					  <div className="produce">作梦家秋季新款原创设计薄款</div>
					  <div className="price">促销价<span>￥188</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothone.png")]}/>
					  </div>
					  <div className="produce">
                       小蓝象喜眠hinos儿童排汗面料速干内衣男女宝宝睡衣套装
                        </div>
					  <div className="price">促销价<span>￥398</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothtwo.png")]}/>
					  </div>
					  <div className="produce">
        
        PawinPaw卡通小熊童装2020年新款冬季女童连帽</div>
					  <div className="price">促销价<span>￥479</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/cloththree.png")]}/>
					  </div>
					  <div className="produce">2019新款网红童装冬装夹棉女孩长款风衣洋气儿童上衣
      </div>
					  <div className="price">促销价<span>￥118</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothfour.png")]}/>
					  </div>
					  <div className="produce">欧美新款夏季v领潮牌冰丝半袖男体恤衫韩版潮流上衣服
      </div>
					  <div className="price">促销价<span>￥298</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothfive.png")]}/>
					  </div>
					  <div className="produce">潮牌韩版衣服装2020新款修身潮流纯棉翻领保罗polo衫
      </div>
					  <div className="price">促销价<span>￥328</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothsix.png")]}/>
					  </div>
					  <div className="produce">男士翻领修身韩版潮流夏季POLO衫男潮牌商务轻奢保罗
      </div>
					  <div className="price">促销价<span>￥328</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothseven.png")]}/>
					  </div>
					  <div className="produce">男夏季大码宽松港风潮牌2020新款半袖潮流ins男士衣服
      </div>
					  <div className="price">促销价<span>￥39</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clotheight.png")]}/>
					  </div>
					  <div className="produce">V领2019夏季新款韩版潮牌纯棉半袖体桖潮流修身男装
      </div>
					  <div className="price">促销价<span>￥188</span></div>
				  </li>
				  <li>
					  <div className="listImg">
						  <img alt="" src={[require("../assets/images/clothnine.png")]}/>
					  </div>
					  <div className="produce">
        
        香港潮牌简约刺绣港风Polo衫字母拼接修身翻领短袖男日系纯色</div>
					  <div className="price">促销价<span>￥188</span></div>
				  </li>
				  <div className="clearfix"></div>
			  </ul>
		  </div>
			</div>
		);
	}
}
