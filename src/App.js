import React,{Component} from 'react';
import './index.css';
import Header from './header';
import './reset.css';
import Sec1 from './sec1';
import Sec2 from './sec2';
import Float from './float';
import Sec3 from './sec3';
import Sec4 from './sec4';
import Footer from './footer';
/*import {BrowserRouter,Route} from 'react-router-dom';*/
/*import Input from './input';*/

class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Sec1/>
                <Sec2/>
                <Sec3/>
                <Sec4/>
                <Footer/>
                <Float/>
                    
            </div>
        );
    }
}
export default App;