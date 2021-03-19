import React from 'react';
import './homepage.styles.scss';

import {Link} from 'react-router-dom';

import { Header } from '../../components/header/header.component';

import Header_image from '../../assets/home.jpg';


const Homepage= () => (
    <div className="homepage">
        <Header Header_image={Header_image}>
            <h1 style={{color :'white',fontSize: '50px'}} data-aos="fade-up" data-aos-duration="700">
                Hello, Want to Convert Your Handwritten notes to Document,</h1>
                <p style={{fontSize: '40px',textAlign: 'center'}} data-aos="fade-up" data-aos-duration="900">Don't worry We Type For You.</p><br></br>
                <div align="right" data-aos="fade-up" data-aos-duration="1100"><Link className="button" to="/about">Type for Me</Link></div>
        </Header>
        <div className="main-heading" data-aos="fade-up" data-aos-duration="700">
            <h1>What's this About ?</h1>
        </div>
        <div className="features">
            <div className="blocks" >
                <div className="para" data-aos="slide-right" data-aos-duration="500">
                    <h1>What we do ?</h1>
                    <p>In a nutshell We Type For You. We take whatever notes you upload and convert them into digital documents. After you pay a small amount of coins.</p>
                    <div className="forScroll"><a href="#coins" className="scroll button">Learn About Coins</a></div>
                </div>
                <img src={require('../../assets/home-you.jpg')} alt="why" data-aos="slide-left" data-aos-duration="500"/>
            </div>
            <div className="blocks">
                <img src={require('../../assets/home-notes.jpg')} alt="why" data-aos="slide-right" data-aos-duration="500"/>
                <div className="para" data-aos="slide-left" data-aos-duration="500">
                    <h1>What you have to do ?</h1>
                    <p>All You have to do is go to the Sign Up page. Then Login and then upload your documents and pay the coins.</p>
                    <div className="forScroll"><a href="#how-to" className="scroll button">Learn More</a></div>
                </div>
            </div>
            <div className="blocks">
                <div className="para" data-aos="slide-right" data-aos-duration="500">
                    <h1>Why Choose Us ?</h1>
                    <p>The documents are typed by People who take this work seriously and as a profession. So, you can expect perfection instead of something done by AI which has many imperfections. We strive to deliver quality with our work and will always push past our limits to deliver it.</p>
                </div>
                <img src={require('../../assets/home-why.jpg')} alt="why" data-aos="slide-left" data-aos-duration="500"/>
            </div>
        </div>
        <div id="how-to" className="main-heading" style={{backgroundColor: 'rgb(255, 236, 218)',}}  data-aos="fade-up" data-aos-duration="700">
            <h1>How to upload Your documents ?</h1>
        </div>
        <div className="features">
            <div className="blocks">
            <img src={require('../../assets/home-log.jpg')} alt="why" data-aos="slide-right" data-aos-duration="500"/>
            <div className="para" data-aos="slide-left" data-aos-duration="500">
                <h1>Log In / Sign Up</h1>
                <p>Go to our sign up / log in page visible at the top right corner of the page. If you already have an account you can login or you can sign up. Alternatively you can also login through your Google Account.</p>
            </div>
            </div>
            <div className="blocks">
            <div className="para" data-aos="slide-right" data-aos-duration="500">
                <h1>Go to Your Profile</h1>
                <p>After you successfully Login your Name should be visible in place of login button in the menu, When you hover over it you can see the Link to the Profile Page Click on it to get redirected the Profile Page.</p>
            </div>
            <img src={require('../../assets/home-prof.jpg')} alt="why" data-aos="slide-left" data-aos-duration="500"/>
            </div>
            <div className="blocks">
            <img src={require('../../assets/home-upl.jpg')} alt="why" data-aos="slide-right" data-aos-duration="500"/>
            <div className="para" data-aos="slide-left" data-aos-duration="500">
                <h1>Upload document</h1>
                <p>While on the profile page you will see a link to the upload page, click on it and you will be asked to upload your notes (prefer using doc scanner for better visibility) and pay the advance coins you can also add additional instructions for the typer.</p>
            </div>
            </div>
            <div className="blocks">
            <div className="para" data-aos="slide-right" data-aos-duration="500">
                <h1>Relax</h1>
                <p>After successful completion we will send you an email containing the document file which will also be available in your profile.</p>
            </div>
            <img src={require('../../assets/home-relax.jpg')} alt="why" data-aos="slide-left" data-aos-duration="500"/>
            </div>
        </div>
        <div id="coins" className="main-heading" style={{backgroundColor: 'rgb(198, 253, 196)',}} data-aos="fade-up" data-aos-duration="700">
            <h1>Payment ? Coins ?</h1>
        </div>
        <div className="features">
            <div className="blocks">
                <img src={require('../../assets/home-pay.jpg')} alt="why" data-aos="slide-right" data-aos-duration="500"/>
                <div className="para" data-aos="slide-left" data-aos-duration="500">
                    <h1>Why Should I Pay ?</h1>
                    <p>The process of conversion of your notes to document is being done by a Real Person and not a machine. So it is only ethical to pay them for their hand work and time.</p>
                </div>
            </div>
            <div className="blocks">
            <div className="para" data-aos="slide-right" data-aos-duration="500">
                <h1>Why Coins?</h1>
                <p>Different Countries have different currencies and It will be a big hassle to deal with them and keep up with the up's and down's of value of every country every day, Hence the concept of coins. Don't worry you can change them back to money any time you want.</p>
            </div>
            <img src={require('../../assets/home-coins.jpg')} alt="why" data-aos="slide-left" data-aos-duration="500"/>
            </div>
        </div>
        <div id="typer" className="main-heading" style={{backgroundColor: 'rgb(255, 208, 208)',}} data-aos="fade-up" data-aos-duration="700">
            <h1>Wanna Become a Typer ?</h1>
        </div>
        <div className="features">
            <div className="blocks">
            <img src={require('../../assets/home-apply.jpg')} alt="why" data-aos="slide-right" data-aos-duration="500"/>
            <div className="para" data-aos="slide-left" data-aos-duration="500">
                <h1>How to Apply</h1>
                <p>You can go to your profile page and select become a typer, there you have to fill a no disclosure aggrement form so as not to disclose and personal information for the document you are converting.</p>
            </div>
            </div>
            <div className="blocks">
            <div className="para" data-aos="slide-right" data-aos-duration="500">
                <h1>Things to keep in mind.</h1>
                <p>Never discolse any information given in the notes without the owners permission failing to do so might even end up in a lawsuite. Try to always complete the job in time failing to do so will result in lowering your rating and even a temperory or permanent ban.</p>
            </div>
            <img src={require('../../assets/home-caut.jpg')} alt="why" data-aos="slide-left" data-aos-duration="500"/>
            </div>
            <div className="blocks">
            <img src={require('../../assets/home-payment.jpg')} alt="why" data-aos="slide-right" data-aos-duration="500"/>
            <div className="para" data-aos="slide-left" data-aos-duration="500">
                <h1>Will I get Paid?</h1>
                <p>Ya, Ofcourse you will get paid for your hard work, after successfully completing the work the money will be transferred in the form of coins which you can then turn back to money after you have a certain mininum amount.</p>
            </div>
            </div>
        </div>
    </div>
);

export default Homepage;