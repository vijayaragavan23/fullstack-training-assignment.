import { Component } from "react";

class ChildComp extends Component{
  state={
      compversion:999
  }
  clickHandler=()=>{
    this.setState({
      compversion:this.state.compversion+1
    })
  }
    render(){
        return <>
                <div>
                    <h1 className="box">Welcome to My Application</h1>
                   App Version is :{this.props.version}<br></br>
                   component version is:{this.state.compversion}
                   <button onClick={this.clickHandler}>increase component version</button>
            </div>
            </>  
  }
}

export default ChildComp