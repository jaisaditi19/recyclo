import React from "react";
import "./Sell.css";

function Sell() {
  return (
    <>
      <div className="sell-cont"></div>
      
        <div className="wrapper">
          <div className="registration_form">
            <div className="title">Sell Your Waste</div>

            <form action="https://formspree.io/f/mrgvalyq" method="POST">
              <div className="form_wrap">
                <div className="input_grp">
                  <div class="input_wrap">
                    <label for="fname">First Name</label>
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
                  <label for="Address">Address</label>
                  <input type="text" id="Address" placeholder="Enter Address" name="address" autoComplete="off" required/>
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
                  <label for="Type of Waste">Type of Waste</label>

                  <select name="Type of Waste" style={{width:"100%", padding:"10px"}}>
                    <option value="news">Newspaper & Notebook</option>
                    <option value="ewaste">E-waste</option>
                    <option value="plastic" selected>
                      Plastic Materials
                    </option>
                    <option value="glass">Glass Materials</option>
					<option value="bio">Bio Waste</option>
					<option value="manuf">Manufacturing Waste</option>
                  </select>
                </div>

                <div className="input_wrap">
                  <label for="Weight of Waste">Weight of Waste</label>
                  <input
                    type="number"
                    id="Weight of Waste"
                    placeholder="Weight of Waste"
					name="wt"
					autoComplete="off"
					style={{width:"100%", padding:"10px"}}
					required
                  />
                </div>
                <div className="input_wrap">
                  <label for="Estimated Price">Estimated Price</label>
                  <input
                    type="number"
                    id="Estimated Price"
                    placeholder="Estimated Price"
					name="price"
					autoComplete="off"
					style={{width:"100%", padding:"10px"}}
                  />
                </div>
                <div className="input_wrap">
                  <input type="submit" value="sell" className="submit_btn" />
                </div>
              </div>
            </form>
          </div>
        </div>
      {/* </form> */}
      {/* </div> */}
    </>
  );
}

export default Sell;
