import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Experience",
        tab3 = "Education & Certification";
        // tab4 = "Awards";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        {/* <Tab>{tab4}</Tab> */}
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/">Full-Stack<span> - Development</span></a>
                                                    Build a foundation, then make it pretty.
                                                </li>
                                                <li>
                                                    <a href="/">Test Driven Development<span> - Development</span></a>
                                                    So apps behave they way they should.
                                                </li>
                                                <li>
                                                    <a href="/">Client Liason <span> - Project Management</span></a>
                                                    Tech talk without the jargon.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                    <a href="/">Freelance Software Developer<span> - Self Employed </span></a> 2023 - Current
                                               </li>
                                               <li>
                                                    <a href="/">Software Developer<span> - Switchbox</span></a> 2022 - 2023
                                               </li>
                                               <li>
                                                    <a href="/">Software Developer<span> - Radial Devlopment Group </span></a> 2021 - 2022
                                               </li>
                                               <li>
                                                   <a href="/">Software Developer Student<span> - Flatiron </span></a> 2020 - 2021
                                               </li>
                                               {/* <li>
                                                   <a href="/service">Project Manager<span> - Madwire </span></a> 2012 - 2020
                                               </li> */}
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">PMP<span> - Project Management Institute</span></a> 2021
                                               </li>
                                               <li>
                                                   <a href="/service">BSc<span> - Information Technology</span></a> 2011
                                               </li>
                                               {/* <li>
                                                   <a href="/service">Graphic Designer<span> - ABC Institute, Los Angeles, CA</span></a> 2007
                                               </li> */}
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    {/* <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                               <li>
                                                   <a href="/service">CSS Design Awards <span>- Winner</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Design nominees <span>- site of the day</span></a> 2013- 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel> */}
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;