import React, { Component } from 'react';
import { Carousel } from 'antd';
import './main.less';
const goodsList = [
	{
		id: '1001',
		image:require("../assets/images/1.jpg"),
		title: '苏泊尔电热水壶家用官方旗舰店保温电热烧水壶304不锈钢自动断电',
		specifications: '颜色分类：米白色',
		original: '299.00',
		price: '79.00',
		num: '1',
		check: true
	},
	{
		id: '1002',
		image:require("../assets/images/2.jpg"),
		title: '衣柜简易儿童组装塑料布艺租房卧室家用挂仿实木单布衣橱收纳柜子',
		specifications: '颜色分类：1列8层白',
		original: '130.00',
		price: '58.00',
		num: '1',
		check: false
	},
	{
		id: '1003',
		image:require("../assets/images/3.jpg"),
		title: '简易塑料鞋柜防尘收纳组装家用经济宿舍鞋架简约现代省空间门厅柜',
		specifications: '颜色分类：【降价促销 仅限一天】14门2挂',
		original: '290.00',
		price: '139.00',
		num: '1',
		check: false
	},
	{
		id: '1004',
		image:require("../assets/images/4.jpg"),
		title: '拼装分层门口实用鞋子折叠鞋架多层伸缩结实高低学校调节拆装简易',
		specifications: '颜色分类：特价小尺寸北欧枫木',
		original: '38.90',
		price: '19.90',
		num: '1',
		check: true
	}
];
export default class Shopcart extends Component {
	constructor() {
		super();
		this.state = {
			goodsList: goodsList
		};
	}

	componentDidMount() {}
	refresh() {
		this.forceUpdate();
	}

	render() {
		return(
			<div className="shopCarts">
				<h3><span>购物车</span></h3>
				<div id='buyCarTitle'>
					<ul className='car-list'>
						<li className='li-checkbox'><input type='checkbox' id='allSelect'/>全选</li>
						<li className='li-info'>商品信息</li>
						<li className='li-operation'>操作</li>
						<li className='li-amount'>金额</li>
						<li className='li-num'>数量</li>
						<li className='li-price'>单价</li>
					</ul>
				</div>
				{
					this.state.goodsList.map((item, index) => {
						return (
							<GoodList item={item} key={index} refresh={this.refresh.bind(this)}/>
						)
					})
				}
				<GoodTotal goodsList={this.goodsList} refresh={this.refresh.bind(this)}/>
			</div>
		)
	}
	}

	class Main extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                goodsList: goodsList
            }
        }
        refresh() {
            this.forceUpdate();
        }
        render() {
            return(
                <div>
                    <h3><span>购物车</span></h3>
                    <div id='buyCarTitle'>
                        <ul className='car-list'>
                            <li className='li-checkbox'><input type='checkbox' id='allSelect'/>全选</li>
                            <li className='li-info'>商品信息</li>
                            <li className='li-operation'>操作</li>
                            <li className='li-amount'>金额</li>
                            <li className='li-num'>数量</li>
                            <li className='li-price'>单价</li>
                        </ul>
                    </div>
                    {
                        this.state.goodsList.map((item, index) => {
                            return (
                                <GoodList item={item} key={index} refresh={this.refresh.bind(this)}/>
                            )
                        })
                    }
                    <GoodTotal goodsList={this.goodsList} refresh={this.refresh.bind(this)}/>
                </div>
            )
        }
    }

    class GoodList extends React.Component {
        constructor(props) {
            super(props);
            this.state = {

            }
        }
        delGoods(id) {
             let goodsListCopy=JSON.parse(JSON.stringify(goodsList));

          /*   for(let i = 0; i < goodsListCopy.length; i++) {
                if(goodsListCopy[i].id === id) {
                    goodsList[i].splice(i, 1);
                    break;
                }
            } */
            //this.refs.main.innerHTML= '';
            
            this.props.refresh();
        }

        minusNum(id) {
            for(let i = 0; i < goodsList.length; i++) {
                if(goodsList[i].id === id&&goodsList[i].num>0) {
                    goodsList[i].num--;
                    break;
                }
            }
            
            this.props.refresh();
        }
        addNum(id) {
            for(let i = 0; i < goodsList.length; i++) {
                if(goodsList[i].id === id) {
                    goodsList[i].num++;
                    break;
                }
            }
            
            this.props.refresh();
        }
        checkGoods(id){
            for(let i = 0; i < goodsList.length; i++) {
                if(goodsList[i].id === id) {
                    goodsList[i].check = !goodsList[i].check;
                    break;
                }
            }
            
            this.props.refresh();
        }
        render() {
            return(
                <div ref='main' className='goods-car'>
                    <ul className='goods-list'>
                        <li className='li-checkbox'><input type='checkbox' defaultChecked={this.props.item.check} onChange = {this.checkGoods.bind(this, this.props.item.id)}/></li>
                        <li className='li-info'>
                            <div className='goods-img'><img src={this.props.item.image} /></div>
                            <div className='goods-title'>{this.props.item.title}</div>
                            <div className='goods-specifications'>{this.props.item.specifications}</div>
                        </li>
                        <li className='li-operation'>
                            <div className='goods-oper' onClick={this.delGoods.bind(this, this.props.item.id)}>删除</div>    
                        </li>
                        <li className='li-amount'>
                            <div className='goods-amount' >{(this.props.item.num*this.props.item.price).toFixed(2)}</div>
                        </li>
                        <li className='li-num'>
                            <span className='goods-num-btn goods-num-minus' onClick={this.minusNum.bind(this, this.props.item.id)}>-</span>
                            <input type='text' className='goods-num' readOnly='true' value={this.props.item.num}/>
                            <span className='goods-num-btn goods-num-add' onClick={this.addNum.bind(this, this.props.item.id)}>+</span>
                        </li>
                        <li className='li-price'>
                            <div className='goods-original'>{this.props.item.original}</div>
                            <div className='goods-price'>{this.props.item.price}</div>
                        </li>
                    </ul>
                </div>
            )
        }
    }

    class GoodTotal extends React.Component {
        constructor(props) {
            super(props);
            this.state={
                goodsTotal: 0,
                goodsAmounts: 0
            }
        }

        checkAllGoods(e) {
            const targetCheck = e.target.checked;
            goodsList.map(item=>{
                item.check = targetCheck;
                return item;
            })
            this.props.refresh();
        }
        componentDidMount() {
            
            const checkedList = goodsList.filter(item => item.check);
            let goodsAmounts = 0;
            checkedList.forEach(item => {
                goodsAmounts += item.num*item.price;
            });
            
            this.setState({
                goodsTotal: checkedList.length,
                goodsAmounts: goodsAmounts
            })
        }
        delGoods() {
            
        }
        render() {
            return(
                <div ref='goodsTotal' className='goods-bottom'>
                   {/*  <div className='total-check-all'><input type='checkbox' onChange = {this.checkAllGoods.bind(this)}/>全选</div>
                    <div className='total-del-all'><span onClick={this.delGoods.bind(this)}>删除</span></div> */}
                    <div className='total-nums'><span>合计：<span className='goods-nums'>{this.state.goodsAmounts}</span></span></div>
                    <div className='total-checked'><span>已选商品<span className='goods-checked-num'>{this.state.goodsTotal}</span>件</span></div>
                </div>
            )
        }
        
    }

