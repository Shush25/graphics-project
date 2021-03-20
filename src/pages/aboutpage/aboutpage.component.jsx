import React from 'react';
import './aboutpage.styles.scss';
import team_members from './aboutpage.data.js';
import { CardList } from '../../components/card-list/card-list.component';
import { Header } from '../../components/header/header.component';
import Header_image from '../../assets/about.jpg';
class Aboutpage extends React.Component{
    constructor(){
        super();
        this.state={
            team:team_members
        };
    }
    render(){
        const {team} = this.state;
        return(
            <div className='aboutpage'>
                <Header Header_image={Header_image}>
                <h1 style={{color :'white',fontSize: '50px',textAlign:'center'}} data-aos="fade-up" data-aos-duration="700">
                We are Procrastinators,</h1>
                <p style={{fontSize: '40px',textAlign: 'center'}} data-aos="fade-up" data-aos-duration="900">But we get the work done.</p><br></br>
                <div align="right" data-aos="fade-up" data-aos-duration="1100"><a href="#contactUs" className="button">Contact Us</a></div>
                </Header>
                <div className="main-heading" data-aos="fade-up" data-aos-duration="700">
                <h1>Know more about Us!!!</h1></div>
                <div className="features">
                    <div className="blocks">
                    <div className="para" data-aos="slide-right" data-aos-duration="500">
                        <h1>Our Goal</h1>
                        <p>Our main goal in making this game was to put into use what we learned during our Course of Computer Graphics and Multimedia along with extra learning we did about Unity, C-Sharp and Other new Technology being used now a days.
                        While bringing out something we can be proud to call "We made this Game !!!"</p>
                        <div className="forScroll"><a href="https://github.com/Shush25/graphics-project" className="scroll button">Visit our Github Repository</a></div>
                    </div>
                    <img src={require('../../assets/about-goal.jpg')} alt="why"data-aos="slide-left" data-aos-duration="500"/>
                    </div>
                    <div className="blocks">
                    <img src={require('../../assets/about-future.jpg')} alt="why" data-aos="slide-right" data-aos-duration="500"/>
                    <div className="para" data-aos="slide-left" data-aos-duration="500">
                        <h1>Into the Future!!!</h1>
                        <p>In the future we would love to work on many different projects like this one and continue to improve and learn more about Game development and one day become someone worthy of being called a Professional Senior Game Developer.</p>
                    </div>
                    </div>
                </div>
                <div id="contactUs" className="main-heading" style={{backgroundColor: 'rgb(255, 236, 218)',}} data-aos="fade-up" data-aos-duration="700">
                <h1>Contact Us</h1></div>
                <CardList team={team}/>
            </div>
            
        )
    }
}

export default Aboutpage;