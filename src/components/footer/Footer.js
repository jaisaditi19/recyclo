import React from 'react';
import './Footer.css';

function Footer() {

    return (
      <>
    
      <div className="foot-container">
      
      <div className="Footer">
      
        <div className="footerRow">
          <div className="f_nav">
         
            <h3 className="textfooter">About Us</h3>
            
              <p className="footertextaboutus">
                The purpose of education is to make good human beings with skill and expertise..
                enlightened human being can be created by teachers.
              </p>
      
          </div>
          
          <div className="f_nav">
                <h3 className="textfooter">Quick Links</h3>
                <div className="row footerinnertext">
                  <p>Home</p>
                </div>
                <div className="row footerinnertext ">
                  <p>Affiliation</p>
                </div>
                <div className="row footerinnertext">
                  <p>Fee Structure</p>
                </div>
                <div className="row footerinnertext">
                  <p>School Calender</p>
                </div>
  
             
             
              </div>
              <div className="f_nav">
                <h3 className="textfooter">Contact Us</h3>
                <div className="row">
                  <p className="footerinnertext"><VscLocation /><span>Belwar, Raiganj Bazar, Gorakhpur</span></p>
                </div>
                <div className="row">
                  <p className="footerinnertext"><GiRotaryPhone /><span>9454642089,8528725270</span></p>
                </div>
  
                <div className="row">
                  <p className="footerinnertext"><MdEmail /><span>ushasinghpublicschool@gmail.com</span></p>
                </div>
               
               
               
              </div>
            </div>
          
            <div className="row copyright">© Copyright 2023 US Public School</div>
          </div>
          </div>
      </>
    );
  }
  
  
  
  
  

export default Footer