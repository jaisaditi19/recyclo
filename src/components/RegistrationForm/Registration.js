import React from 'react'
import "./Registration.css";


function  Registration()  {
    return (
  <>
            <div className="form-cont"></div>
      
      <div className="wrapper">
        <div className="registration_form">
          <div className="title">Registration</div>

          <form action="https://formspree.io/f/mrgvalyq" method="POST">
            <div className="form_wrap">
              <div className="input_grp">
                <div class="input_wrap">
                  <label for="fname">Enter Your Name</label>
                  <input
                    type="text"
                    id="fname"
                    placeholder="Enter Your fname"
                    name="fname"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input_wrap">
                    <label for="lname">Last Name</label>
                    <input
                      type="text"
                      id="lname"
                      placeholder="Enter Your lname"
					  name="lname"
					  autoComplete="off"
                    />
                  </div>
                
               
              </div>
              <div className="input_wrap">
                <label for="email">Email</label>
                <input type="text" id="Email" placeholder="Enter Your Email" name="email" autoComplete="off" required/>
              </div>

              <div className="input_wrap">
                <label for="Phone Number">Phone Number</label>
                <input
                  type="text"
                  id="Phone Number"
                  placeholder="Enter Your Phone Number"
                  name="number"
                  autoComplete="off"
                  required
                />
              </div>
             
              
              <div className="input_wrap">
                <label for="Password">Password</label>
                <input
                  type="number"
                  id="Password"
                  placeholder="Enter Your Password"
                  name="price"
                  autoComplete="off"
                  style={{width:"100%", padding:"10px"}}
                />
              </div>
              <div className="input_wrap">
                <input type="submit" value="register" className="submit_btn" />
              </div>
            </div>
          </form>
        </div>
      </div>
        
                </>
                  

                  )
                  };
                  
                
export default Registration
