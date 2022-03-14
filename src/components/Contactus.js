import React from 'react';
import emailjs from 'emailjs-com';
import { AiFillEnvironment } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";


const ContactUs = () => {
  function sendemail(e) {
    e.preventDefault();

    emailjs.sendForm('service_g5m6jqr', 'template_6t9onpm', e.target, 'MkctW2OiA5S2BJ4ch')
      .then((result) => {
        console.log(result.text);

      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };



return (
  <>

    <div className='header'>
    </div>
    <div className='heading'>
      <h1>Lets Connect</h1>
    </div>
    <div className='contactusbody'>
      <div className='main1'>

        <div className='location'>

          <AiFillEnvironment />
          <h2>
            Address
          </h2>
          <p>2307,Sadar Thana Road,Delhi-110006.     Landmark-Street opposite aggarwal Sweet</p>

        </div>
        <div className='Callus' >
          <AiFillPhone />
          <h3>Phone</h3>
          <p>09868708464 , 09654246055 , 09718117745 , 08178696905</p>


        </div>
      </div>

      <div className='form'>
        <AiFillMail />
        <form onSubmit={sendemail}>
          <h2>Get in Touch </h2>
          <div className='inputfield'>
            <input type="text" name='user_name' placeHolder='Enter your name' required />
          </div>
          <div className='inputfield'>
            <input type="email" name='email_id' placeHolder='Enter your Email' required />
          </div>
          <div className='inputfield'>
            <input type="tel" name='phone_no' placeHolder='Enter your Phone no.' required />
          </div>
          <div className='inputfield'>
            <input type="text" name='prod_name' placeHolder='Enter the Product name intrested in' />
          </div>
          <div className='inputfield'>
            <input type="text" name='input_message' placeHolder='Enter your message' />
          </div>
          <div>
            <input type="submit" className='submitbutton' value="Send Message" />
          </div>
        </form>
      </div>

    </div>

  </>
);
}  

export default ContactUs;
