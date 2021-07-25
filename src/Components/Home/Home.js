import React from 'react';
import { Link, Route } from 'react-router-dom';

function Home() {
    return(
        <div>
        <header className = "webhead">
            ORI'S_WEB.
        </header>
        <MainNav/>
        </div>
    );
}

function MainNav() {
    return(
        <body>
            <Route>
            
            
                <Link to = "Projects" style={{ color: '#000'}} >
                    <div className="projectsbox">
                        PROJECTS
                        <div className = "bprojectsbox"></div>
                    </div>
                </Link>
               
            
            

                <Link to = "/About" style={{color: '#000'}}>
                    <div className="aboutbox">
                        ABOUT
                        <div className="baboutbox"></div>
                    </div>
                </Link>

                <Link to = "/Contact" style={{color: '#000'}}>
                    <div className="contactbox">
                        CONTACT
                        <div className="bcontactbox"></div>
                    </div>
                </Link>

                <Link to = "/Social" style={{color: '#000'}}>
                    <div className="box">
                        SOCIAL
                        <div className="bbox"></div>
                    </div>
                </Link>

                <Link to = "/Social" style={{color: '#000'}}>
                    <div className="socialbox">
                        SOCIAL
                        <div className="bsocialbox"></div>
                    </div>
                </Link>
                </Route>

                
                
                
            
        </body>
    );
}

export default Home;