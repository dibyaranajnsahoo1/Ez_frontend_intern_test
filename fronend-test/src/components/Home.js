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
  const [loading, setLoading] = useState(false); // New state for loading

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

      setLoading(true); // Start loading

      try {
          const response = await fetch("https://test.ezworks.ai/api", {
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

      setLoading(false); // Stop loading
  };

      

    return (

        <div className="main-page"> 
        <div className="main">
            <div className="page">
                <div className="st" >
                        <img className="Main-Logo" alt="Logo" src={ez} />
                        <h1 className="main-heading">Suite Of Business Support Services</h1>
                        <p className="main-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                 </div>
                 <div className="nd">
                        <div className="ser">
                            <div className="msg-div">
                                 <img className="icon-img" alt="presentation" src={presentation}/>
                                 <h1 className="icon-heading">Presentation Design</h1>
                            </div>
                            <p  className="icon-para">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="ser">
                            <div className="msg-div">
                                 <img className="icon-img" alt="audio" src={audio}/>
                                 <h1 className="icon-heading">Audio - Visual Production</h1>
                            </div>
                            <p  className="icon-para">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="ser">
                            <div className="msg-div">
                                 <img className="icon-img" alt="Translation" src={Translation}/>
                                 <h1 className="icon-heading">Translation Services</h1>
                            </div>
                            <p  className="icon-para">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="ser">
                            <div className="msg-div">
                                 <img className="icon-img" alt="Graphic" src={Graphic}/>
                                 <h1 className="icon-heading">Graphic Design</h1>
                            </div>
                            <p  className="icon-para">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="ser">
                            <div className="msg-div">
                                 <img className="icon-img" alt="Research" src={Research}/>
                                 <h1 className="icon-heading">Research & Analytics</h1>
                            </div>
                            <p  className="icon-para">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="ser">
                            <div className="msg-div">
                                 <img className="icon-img" alt="data" src={data}/>
                                 <h1 className="icon-heading">Data Processing</h1>
                            </div>
                            <p  className="icon-para">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                        </div>
                      
                        
                </div>    
                 
            </div>
             <div className="inp">
                       <form onSubmit={handleSubmit}>
                                    <input className="input"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"/>
                                   <button className="btn" type="submit" disabled={loading}>
                                        {loading ? "..." : "Contact Me"} {/* Show '...' when loading */}
                                   </button>
                                    {error && <p className="error">{error}</p>}
                                    {message && <p className="success">{message}</p>}
                          </form>
                </div>  
                </div>
         </div>
    );
};

export default MainPage;

