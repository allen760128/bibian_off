import React,{Component} from 'react';
import content from './sec3Data.json';

class sec3Content extends Component{
    state={
        content,
    }
    render(){
        const {content}=this.state;
        
        return(
            <div className="sec3Content">
                        <ul>
                            {content.map(contents=>(
                            <li key={contents.id}>
                                <div className="contentWrap">
                                    <img src={contents.pic} alt="" />
                                    <div className='c1'>{contents.title1_1}<br/>{contents.title1_2}<br/>{contents.title1_3}</div>
                                    <div className="c2">
                                        <div className="c2_1">{contents.title2_1}<br/>{contents.title2_2}</div>
                                        <div className="c2_2">
                                            <div className="c2_2rect">
                                                <div className="rec"></div>
                                            </div>
                                        </div>
                                        <div className="c2_3">{contents.title2_3}<br/>{contents.title2_4}</div>
                                    </div>
                                    <div className="c3">
                                        <div className="c3_1">
                                            <div className="rec"></div>
                                            <div className="rec"></div>
                                        </div>
                                        <div className="c3_2">{contents.title3}</div>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
        );
    }
}
export default sec3Content;