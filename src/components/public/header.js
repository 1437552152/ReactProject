import React,{Component} from 'react';
import { Link } from 'react-router-dom'
class One extends Component{
    constructor() {
      super();
      this.state = {
        country:null
      };
    } 

componentDidMount(){}
    render(){
        return (
          <div>
          <Link to="/Home">首页</Link>
          <Link to="/History">历史页</Link>
          </div>
        )
}
}
export default One;