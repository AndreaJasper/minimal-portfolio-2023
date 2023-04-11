import React, { Component } from "react";

class Brand extends Component{
    render(){
        const {branstyle } = this.props;
        return(
            <React.Fragment>
                <ul className={`brand-list ${branstyle}`}>
                    <li>
                        <img src="/assets/images/brand/react-2.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/rails.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/javascript.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/mysql-2.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/heroku-2.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/sass.png" alt="Logo Images"/>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default Brand;