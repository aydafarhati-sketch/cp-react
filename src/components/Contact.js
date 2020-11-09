import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Contact() {
    return (
        <div className="contact-form">
        <h1>Contact Us</h1>
        <form>
        <div className="form-row">
    <div className="form-group col-md-6">
      <label>First name</label>
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Last name</label>
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>
  <div className="form-row">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email@hotmail.com"/>

  </div>
    <div className="form-group">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label>Phone</label>
    <input type="number" className="form-control" placeholder="5148552 "/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="st 22 ..."/>
  </div>
  <div className="form-row">
      <label>Country</label>
      <select className="form-control">
        <option selected>Select country</option>
        <option>Tunisia</option>
        <option>Algeria</option>
        <option>Marroco</option>
        <option>Cairo</option>
        <option>Paris</option>
        <option>London</option>
        <option>Germanie</option>
        <option>Spain</option>
        <option>China</option>
        <option>Japon</option>
      </select>
  </div> 
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        I'm not a robot
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
        
</div>
        
    )
}
export default Contact