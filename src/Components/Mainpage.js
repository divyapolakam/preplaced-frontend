import React,{userState} from 'react';
import { FaUserCog,FaUserFriends } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import { AiFillPlusSquare, AiFillDelete, AiOutlineSearch } from 'react-icons/ai';
import { BsHeart } from "react-icons/bs";
import { CgTag } from 'react-icons/cg';
import image1 from '../Components/images/slack.jpg'
import image2 from '../Components/images/fb.jpeg'
import image3 from '../Components/images/zendesk.jpeg'
import image4 from '../Components/images/mailchimp.jpeg'
import image5 from '../Components/images/wordpress.jpeg'
import image6 from '../Components/images/salesforce.jpg'

function App() {
  return (
    <div class="container">  
    <head>
        <title>Preplaced</title>
    </head>
    <body style={{ backgroundColor: "lightgrey"}}>
        <div class="row">
           <div class="column1">
               <div class="icon">
                  <span><FaUserCog/></span>
               </div>
               <div class="text">
                  <span><b>Accounts</b></span><br/><span>Your account preferences</span>
               </div>
               <hr/>
               <div class="icon">
               <MdNotifications/>
               </div>
               <div class="text">
                  <span><b>Notifications</b></span><br/>
                  <span>Your notifications preferences</span>
               </div>
               <hr/>
               <div class="icon">
               <AiFillPlusSquare/>
               </div>
               <div class="text">
                  <span><b>Integrations</b></span><br/>
                  <span>Add or remove integrations</span></div>
               <hr/>
               <div class="icon">
               <FaUserFriends/>
               </div>
               <div class="text">
                  <span><b>Collegues</b></span><br/>
                  <span>Your collegues preferences</span>
               </div>
               <hr/>
               <div class="icon">
               <CgTag/>
               </div>
               <div class="text">
                  <span><b>Tags</b></span><br/>
                  <span>Add or remove tags</span>
               </div>
               <hr/>

           </div>
           <div class="column2">
           <div class="topnav">
              <b style={{ fontSize: "18px"}}>Integrations</b>
              <a href=""></a>
              <a href="#favourites"><b>Favourites</b></a>
              Category:<span style={{ color: "blue"}}>All</span>
              
              Filters:<span style={{ color: "blue"}}>All</span>
           </div>
           <div class="input-icons"> 
           <AiOutlineSearch/>     
                <input class="input-field" style={{ width: "1050px",height: "20px"}}
                       type="text"
                       placeholder="search integrations"/> 
                       </div><br/><hr/>
              <h4>Your Integrations</h4>
              <div class="row">
              <div class="column3">
                 <img src={image1}/>
                 <p><b>Slack</b><br/>Slack is a digital workspace that connects you to the people and tools you work with everyday.<br/><h4 style={{color: "blue"}}>Connect <BsHeart/></h4></p>
                 </div>
              <div class="column4">
              <img src={image2}/>
                 <p><b>Facebook Ads</b><br/>Connect your Facebook Ads account and never struggle to report on the success.<br/><h4 style={{color: "blue"}}>Connect <BsHeart/></h4></p>    
              </div>
              <div class="column5">
                 <img src={image3}/>
                 <p><b>Zendesk</b><br/>Gain more insights into the customer experience with the new zendesk activity integration.<br/><h4 style={{color: "blue"}}>Connect <BsHeart/></h4></p>
                  </div>
               
               <h4>Popular integrations</h4>
               <div class="column6">
               <img src={image4}/>
                 <p><b>MailChimp</b><br/>Connect your lead flows and collected forms to your MailChimp account.<br/><h4 style={{color: "blue"}}>Connect <BsHeart/></h4></p>
               </div>
               <div class="column7">
               <img src={image5}/>
                 <p><b>WordPress</b><br/>Connect with WordPress blog or website to convert website vistors into leads or buyers.<br/><h4 style={{color: "blue"}}>Connect <BsHeart/></h4></p>
               </div>
               <div class="column8">
               <img src={image6}/>
                 <p><b>Salesforce</b><br/>Sync Salesforce for a fast, reliable and powerfull integratio between your two databases.<br/><h4 style={{color: "blue"}}>Connect <BsHeart/></h4></p>
               </div>
            </div>
              
           </div>
        </div>
    </body>
    </div>
  );
}

export default App;
