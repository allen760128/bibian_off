import React,{Component} from 'react';


class signin extends Component{
    constructor(props){
        super(props);
        this.state={
            switched:false,
        }
    }
    handleSwitch=()=>{
        this.setState({
            switched:true,
        });
    }
    handleSwitch2=()=>{
        this.setState({
            switched:false,
        });
    }
    render(){
        const {switched}=this.state;
        const opened=this.props.open;
        const {usvalue,pwvalue,emvalue}=this.props;
        const uskeychanged=this.props.uskeychange;
        const useralert=uskeychanged?'':'請輸入至少8位英數，並包含大小寫英文';
        const pwkeychanged=this.props.pwkeychange;
        const pwalert=pwkeychanged?'':'請輸入至少8位英數，並包含大小寫英文';
        const emkeychanged=this.props.emkeychange;
        const emalert=emkeychanged?'':'請輸入正確電子郵件';
        
        return(
            <div className='signInClass ' style={opened} >
        <div className="sign_outer">
            <div className="container" style={{left:switched?'-1600px':'0px'}}>
                <form action="/action_page.php" id="frm1">
                <label forHTML="username">使用者名稱</label>
                <input id="userna" type="text" name="username" placeholder="Enter Username" value={usvalue} onKeyDown={(e)=>{this.props.handleUskeydown(e)}} onChange={(e)=>{this.props.onchange(e)}} required/>
                <span className="userAlert1 userScale">{useralert}</span>
                <label forHTML="pw">使用者密碼</label>
                <input id="userpw" type="password" name="pw" placeholder="Enter Password" value={pwvalue} onKeyDown={(e)=>{this.props.handlePwkeydown(e)}} onChange={(e)=>{this.props.pwchange(e)}} required/>
                <span className="userAlert2 userScale">{pwalert}</span>
                <button type="submit" class="ebutton" id="signSub" >登入</button>
                <label forHTML=""><input type="checkbox" name="" id=""/>記住我</label>
                <button className="cancelbtn" type="button" onClick={()=>{this.props.close()}}>取消</button>
                <span className="psw" id='psw1' onClick={()=>{this.handleSwitch()}}><a href="#">忘記密碼?</a></span>
                </form>
            </div>
            <div className="container2" style={{right:switched?'0px':'-1000px'}}>
                <form action="/index.html" id="frm2">
                <h3>重設密碼</h3>
                <label forHTML="pw">E-mail信箱</label>
                <input id="usermail" type="text" name="email" placeholder="Enter e-mail" value={emvalue} onKeyDown={(e)=>{this.props.handleEmkeydown(e)}} onChange={(e)=>{this.props.emchange(e)}} required/>
                <span className="userMail userScale">{emalert}</span>
                <button type="submit" className="ebutton mt_10" id="mailSub">寄出</button>
                <button className="cancelbtn mt_10" id="c2btn" type="button" onClick={()=>{this.handleSwitch2()}}>取消</button>
            </form>
            </div>
        </div>
    </div>
        );
    }
}

export default signin;