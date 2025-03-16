import React, { useState } from "react";
import ez from "../assets/EZ Works Blue@2x.png";
import presentation from "../assets/Research@4x@2x.png";
import audio from "../assets/Research@4x@2x2.png";
import Translation from "../assets/Research@4x4.png";
import Graphic  from "../assets/Research@4x.png";
import Research from "../assets/Research@4x3.png";
import data from "../assets/data.png";


import "../Styles/Home.css"

const MainPage = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
      
        if (!email) {
          setError("Email is required.");
          return;
        }
        if (!validateEmail(email)) {
          setError("Invalid email format.");
          return;
        }
      
        try {
          const response = await fetch("https://test.ezworks.ai/api ", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });
      
          const data = await response.json();
          console.log("API Response:", data);
      
          if (response.status === 200) {
            setMessage("Form Submitted");
            setEmail(""); 
          } else if (response.status === 422) {
            setError("Emails ending with @ez.works are not allowed.");
          } else {
            setError("Something went wrong. Please try again.");
          }
        } catch (err) {
          console.error("Network Error:", err);
          setError("Network error. Please try again later.");
        }
      };
      




    return (

        <div> 
            <div className="main-page">
                <div className="st" >
                        <img className="Main-Logo" alt="Logo" src={ez} />
                        <h1 className="main-heading">Suite Of Business Support Services</h1>
                        <p className="main-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                 </div>
                 <div className="nd">
                        <div className="presentation">
                            <div className="presentation-div">
                                 <img className="presentation-img" alt="presentation" src={presentation}/>
                                 <h1 className="presentation-heading">Presentation Design</h1>
                            </div>
                            <p  className="presentation-para">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="audio">
                            <div className="audio-div">
                                 <img className="audio-img" alt="audio" src={audio}/>
                                 <h1 className="audio-heading">Audio - Visual Production</h1>
                            </div>
                            <p  className="audio-para">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="Translation">
                            <div className="Translation-div">
                                 <img className="Translation-img" alt="Translation" src={Translation}/>
                                 <h1 className="Translation-heading">Translation Services</h1>
                            </div>
                            <p  className="Translation-para">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="Graphic">
                            <div className="Graphic-div">
                                 <img className="Graphic-img" alt="Graphic" src={Graphic}/>
                                 <h1 className="Graphic-heading">Graphic Design</h1>
                            </div>
                            <p  className="Graphic-para">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="Research">
                            <div className="Research-div">
                                 <img className="Research-img" alt="Research" src={Research}/>
                                 <h1 className="Research-heading">Research & Analytics</h1>
                            </div>
                            <p  className="Research-para">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="Data">
                            <div className="Data-div">
                                 <img className="Data-img" alt="data" src={data}/>
                                 <h1 className="Data-heading">Data Processing</h1>
                            </div>
                            <p  className="Data-para">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                    <input className="input"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"/>
                                    <button className="btn" type="submit">Contact Me</button>
                                    {error && <p className="error">{error}</p>}
                                    {message && <p className="success">{message}</p>}
                            </form>
                        </div>
                        
                </div>        
            </div>
           
         </div>
    );
};

export default MainPage;

