import React from 'react'; 
import "./Sell.css";


function  sell()  {
  return (
<>
    <div className='sell-cont'></div>
    <form action=" ">
    <div className="wrapper">
	<div className="registration_form">
		<div className="title">
        Sell Your Waste
		</div>

		<form>
			<div className="form_wrap">
				<div className="input_grp">
					<div class="input_wrap">
						<label for="fname">First Name</label>
						<input type="text" id="fname" placeholder='Enter Your fname'/>
					</div>
					<div className="input_wrap">
						<label for="lname">Last Name</label>
						<input type="text" id="lname" placeholder='Enter Your lname' />
					</div>
				</div>
                <div className="input_wrap">
					<label for="Address">Address</label>
					<input type="text" id="Address" placeholder='Enter Address'/>
				</div>
				
                <div className="input_wrap">
					<label for="Phone Number">Phone Number</label>
					<input type="text" id="Phone Number" placeholder='Enter Your Phone Number'/>
				</div>
                <div className="input_wrap">
                <label for="Type of Waste">Type of Waste</label>
                
<select name="Type of Waste"> 
  <option value="free">Free</option>
  <option value="bronze">Bronze</option>
  <option value="silver" selected>Silver</option>
  <option value="Gold">Gold</option>
</select>
</div>
				
				<div className="input_wrap">
					<label for="Weight of Waste">Weight of Waste</label>
					<input type="text" id="Weight of Waste"  placeholder='Weight of Waste'/>
				</div>
				<div className="input_wrap">
					<label for="Estimated Price">Estimated Price</label>
					<input type="text" id="Estimated Price" placeholder='Estimated Price'/>
				</div>
				<div className="input_wrap">
					<input type="submit" value="sell" class="submit_btn"/>
				</div>
			</div>
		</form>
	</div>
</div>



        


    </form>
    {/* </div> */}
    </>
  );
}

export default sell
