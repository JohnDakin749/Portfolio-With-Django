const About = () => {
    return ( 
    <div>
        <section class="container about" id="about">
            <div class="main-title">
                <h2>About <span>me</span><span class="bg-text">my info</span></h2>
            </div>
            <div class="about-container">
                <div class="left-about">
                    <h4>Information About me</h4>
                    <p>
                    Am a Computer Science student with experience in Python,JavaScript, VCS, MySql and Sql database, Agile and a proven track record of delivering projects on time and to high standards. Strong problem-solving and communication skills, with a passion for technology and a desire to continue learning and growing in a dynamic and challenging work environment. Seeking a Computer Science role where I can make a meaningful impact in my field.
                    </p>
                </div>
                <div class="right-about">
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">25+</p>
                            <p class="small-text">Projects <br /> Completed</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">3+</p>
                            <p class="small-text">Years of <br /> experience</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">300+</p>
                            <p class="small-text">Happy <br /> Clients</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">400+</p>
                            <p class="small-text">Customer <br /> reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-stats">
                <h4 class="stat-title">My Skills</h4>
                <div class="progress-bars">
                    <div class="progress-bar">
                        <p class="prog-title">Python</p>
                        <div class="progress-con">
                            <p class="prog-text">70%</p>
                            <div class="progress">
                                <span class="html"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">Django</p>
                        <div class="progress-con">
                            <p class="prog-text">95%</p>
                            <div class="progress">
                                <span class="css"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">Sql</p>
                        <div class="progress-con">
                            <p class="prog-text">60%</p>
                            <div class="progress">
                                <span class="react"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">MySql</p>
                        <div class="progress-con">
                            <p class="prog-text">85%</p>
                            <div class="progress">
                                <span class="node"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">JavaScript</p>
                        <div class="progress-con">
                            <p class="prog-text">65%</p>
                            <div class="progress">
                                <span class="python"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="stat-title">My Timeline</h4>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2022 - present</p>
                    <h5>Software Engineering<span> - Kisii University</span></h5>
                    <p>
                        Handled the entire Computer Science cycle and related projects
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">April 2023 - May 2023</p>
                    <h5>Took a<span> - JavaScript Course</span></h5>
                    <p>
                        Graduated and very eager to expand my knowledge through various projects.
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">Jan 2023 - April 2023</p>
                    <h5>Took a<span> - Django Course</span></h5>
                    <p>
                        Succesfully graduated and had created some projects with the framework including blogging website,chatting website and more.
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2022 - present</p>
                    <h5>Intrested in<span> - Artificial Intelligence</span></h5>
                    <p>
                        Still learning how to use AI for improvement of humanity.
                    </p>
                </div>
            </div>
        </section>
    </div>
     );
}
 
export default About;