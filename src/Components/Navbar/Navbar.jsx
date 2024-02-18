import "./style.scss";
import logo from "./logo-base.png"
import { Avatar } from "@mui/material";
import { useState } from "react";

export default function Navbar() {

    const navigatorOptions = [
        ["Our Programs","ourprograms"],
        ["Get Involved","getinvolved"],
        ["Our Projects","#projects"],
        ["Partners","partners"]
    ]

    const [sliderMenu,setSliderMenu] = useState(false);

    const loginStatus = 1;
    
    const sliderOpts = [
        [
            ["Community","community"],
            ["Map","map"],
            ["Gallery","gallery"],
            ["Organizations","organiztions"],
            ["Events","events"],
            ["Blog","blog"]
        ],
        [
            ["Donations","donations"],
            ["Partners","partners"]
        ]
    ]

    const [isAccountSliderOpened,setIsAccountSliderOpened] = useState(false);

    const loginOpts = [
        [
            ["Log in","login"],
            ["Sign up","signup"]
        ],
        [
            ["Profile","profile"],
            ["Settings","profile/settings"],
            ["Log Out","profile/logout"]
        ]
    ]

    return (
        <nav>

            {
                window.screen.width > 900 ? 

                    <>
                        <div id="menu-slider">
                            {
                                sliderOpts.map(x => 
                                    <div className="menu-slider-divison">{
                                        x.map(y => 
                                            <a className="menu-slider-link" href={'/'+y[1]}>{y[0]}</a>
                                        )
                                    }
                                    </div>
                                )
                            }
                        </div>
                        <div id="real-nav">
                            <a id="menu-button" onClick={e => setSliderMenu(!sliderMenu)} href={sliderMenu ? "#menu-slider" : "#"}></a>
                            <div id="sitename-box">
                                <img src={logo} alt="logo"></img>
                                <h1><a href="/" target="_blank" rel="noopener noreferrer">OCEANUNITY</a></h1>
                            </div>
                            <div id="navigator">
                                {
                                    navigatorOptions.map(x => {
                                        return (
                                            <a className="navigator-section" href={x[1][0] == '#' ? '/'+x[1] : x[1]}>{x[0]}</a>
                                        )
                                    })
                                }
                            </div>
                            <div id="accountOptions" onMouseEnter={() => setIsAccountSliderOpened(true)} onMouseLeave={() => setIsAccountSliderOpened(false)}>
                                <div id="account" href="/test" onClick={e => setIsAccountSliderOpened(!isAccountSliderOpened)}>
                                    <Avatar id="accountPic" src={logo}/>
                                    <a id="sliderActivator" href={isAccountSliderOpened ? "#account-slider" : "#"}>Account Options Slider</a>
                                </div>
                            </div>
                        </div>
                        <div id="account-slider">
                            {
                                loginOpts[loginStatus].map(x => 
                                    <a className="account-slider-opts" href={'/'+x[1]}>{x[0]}</a>
                                )
                            }
                        </div>
                    </>
                
                :

                    <>
                        <div id="menu-slider">
                            {
                                sliderOpts.map(x => 
                                    <div className="menu-slider-divison">{
                                        x.map(y => 
                                            <a className="menu-slider-link" href={'/'+y[1]}>{y[0]}</a>
                                        )
                                    }
                                    </div>
                                )
                            }
                        </div>
                        <div id="real-nav">
                            <div id="nav-upper">
                                <a id="menu-button" onClick={e => setSliderMenu(!sliderMenu)} href={sliderMenu ? "#menu-slider" : "#"}></a>
                                <div id="sitename-box">
                                    <img src={logo} alt="logo"></img>
                                    <h1><a href="/" target="_blank" rel="noopener noreferrer">OCEANUNITY</a></h1>
                                </div>
                                <div id="accountOptions" onMouseEnter={() => setIsAccountSliderOpened(true)} onMouseLeave={() => setIsAccountSliderOpened(false)}>
                                    <div id="account" onClick={e => setIsAccountSliderOpened(!isAccountSliderOpened)}>
                                        <Avatar id="accountPic" src={logo}/>
                                        <a id="sliderActivator" href={isAccountSliderOpened ? "#account-slider" : "#"}>Account Options Slider</a>
                                    </div>
                                </div>
                            </div>
                            <div id="navigator">
                                {
                                    navigatorOptions.map(x => {
                                        return (
                                            <a className="navigator-section" href={x[1][0] == '#' ? '/'+x[1] : x[1]}>{x[0]}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div id="account-slider">
                            {
                                loginOpts[loginStatus].map(x => 
                                    <a className="account-slider-opts" href={'/'+x[1]}>{x[0]}</a>
                                )
                            }
                        </div>
                    </>

            }
            
        </nav>
    )
}