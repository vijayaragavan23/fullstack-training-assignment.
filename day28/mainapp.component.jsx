import { Component } from "react";
import ChildComp from './childComp.component.jsx';

class MainApp extends Component{
    render(){
        return <>
               <ChildComp version='878' />
               <ChildComp version='666' />
            </>  
  }
}

export default MainApp