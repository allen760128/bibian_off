import React,{Component,createRef} from 'react';
import Signin from './signin';

const reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const regMail=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const model=document.getElementsByClassName('signInClass')[0];

class header extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            val:'',
            pwval:'',
            emval:'',
            uskeychange:true,
            pwkeychange:true,
            emkeychange:true,
        }
    }
    
    handleOpen=()=>{
        
        this.setState({
            open:true,
        });
        document.body.style.overflow = "hidden";
    }
    handleClose=()=>{
        this.setState({
            open:false,
            val:'',
            pwval:'',
            emval:'',
            uskeychange:true,
            pwkeychange:true,
            emkeychange:true,
        });
        document.body.style.overflow = "visible";
        
    }
    onchange=(e)=>{
        this.setState({
            val:e.target.value,
        });
    }
    pwonchange=(e)=>{
        this.setState({
            pwval:e.target.value,
        });
    }
    emonchange=(e)=>{
        this.setState({
            emval:e.target.value,
        });
    }
    handleUskeydown=(e)=>{
        this.setState({
            uskeychange:e.target.value.match(reg),

        });
    }
    handlePwkeydown=(e)=>{
        this.setState({
            pwkeychange:e.target.value.match(reg),

        });
    }
    handleEmkeydown=(e)=>{
        this.setState({
            emkeychange:e.target.value.match(regMail),

        });
    }
    
    render(){
        const {open,val,pwval,emval,uskeychange,pwkeychange,emkeychange}=this.state;
        const openSign={display:open?'block':'none'};
        
        return(
            <div>
            <Signin  open={openSign}  
                     close={()=>{this.handleClose()}} 
                     usvalue={val} 
                     pwvalue={pwval}
                     emvalue={emval}
                     onchange={(e)=>{this.onchange(e)}}
                     pwchange={(e)=>{this.pwonchange(e)}}
                     emchange={(e)=>{this.emonchange(e)}}
                     uskeychange={uskeychange}
                     handleUskeydown={(e)=>{this.handleUskeydown(e)}}
                     pwkeychange={pwkeychange}
                     handlePwkeydown={(e)=>{this.handlePwkeydown(e)}}
                     emkeychange={emkeychange}
                     handleEmkeydown={(e)=>{this.handleEmkeydown(e)}}
            /> 
            <div className="header">
                
                <div className="headerWrap">
                    <div className="logoWrap">
                        <a href='#'><img src="img/logo.png" alt="" /></a>
                    </div>
                    <div className="signWrap">
                        <div className="signIn" onClick={()=>{this.handleOpen()}}><a href="#">登入會員</a></div>
                        <div>PChome登入會員首次送<span>$300</span></div>
                    </div>
                </div>
                
            </div>
            </div>
        );
    }
    
}



export default header;