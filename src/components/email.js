import React from 'react';
import '../App.css';
import emailjs from 'emailjs-com';

export default function Email() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_mdkm6cs', e.target, 'user_g5te1IQSMZDJnfWRo4yKf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return(
        <div className = 'email-layout'>
            <h1>Contact Me</h1>
            <div className="email-container">
            <form onSubmit={sendEmail}>
                <div className="row-8 pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name = "name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name = "email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name = "subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name = "message"></textarea>
                    </div>
                    <div className="col-8 form-group pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value= "Send Message" style={{backgroundColor: 'black'}} ></input>
                    </div>
                    
                </div>
                  
            </form>
            </div>
        </div>
    
    );
}

