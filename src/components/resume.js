import React, {Component} from 'react';
import '../App.css';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import History from './history';
import Skills from './skills';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src= "/images/CV.jpg"
                            alt="avatar"
                            style={{height: '300px'}}
                            />
                        </div>
                        <h2 style= {{paddingTop: '2em'}}>Andre Spangenberg</h2>
                        <h4 style={{color: 'black'}}>Junior Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>As a junior developer, I have learned to always solve problems in the
                        most effective way which improves my skill set everyday. I consider
                        myself as someone who's not just qualified at working alone but good
                        at working in teams as well as believe that communication is key to any
                        form of success. I am self motivated, dedicated and I strive to achieve
                        my personal perfection in all my work.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Phone</h5>
                        <p>0784575788</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Email</h5>
                        <p>spangenberg6227@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        
                        <Education 
                          startYear={2013}
                          endYear={2017}
                          schoolName="Hoërskool Noordheuwel"
                          schoolDescription="I complete my matric graduate at Hoërskool Noordheuwel with the folowing 
                          subjects: Afrikaans, English, Mathmatics, Life Orientation, Engineering Graphics and Design,
                          Information Technology and physical sciences."
                          />
                          <Education 
                            startYear={2018}
                            endYear={2020}
                            schoolName="North-West University"
                            schoolDescription="I am currently a final year student at North-West University and at
                            the end of 2020 i will have completed my degree in Bachelors of Science in Information
                            Technologies."
                            />
                            <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>EMPLOYMENT HISTORY</h2>

                    <History 
                        startYear={2019}
                        endYear={2019}
                        companyName = "SYSTEMS AUTOMATION & MANAGEMENT PTY LTD."
                        companyDesricption = "During my second year of my degree (2019) I worked at 
                        SYSTEMS AUTOMATION and MANAGEMENT PTY LTD as an intern"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills 
                          skill= "Java"
                          />
                          <Skills
                            skill= "C#"
                            />
                            <Skills
                              skill= "SQL"
                              />
                              <Skills
                                skill= "Oracle"
                                />
                                <Skills
                                skill= "Python"
                                />
                                <Skills
                                  skill= "Object Oriented Programming"
                                  />
                                  <Skills
                                    skill= "React"
                                    />
                                    <Skills
                                      skill= "Amazon AWS"
                                      />
                                      <Skills
                                        skill= "HTML/CSS/JavaScript"
                                        />
                                        <Skills
                                          skill= "Git"
                                          />
                                          <Skills
                                            skill= "Microsoft Office"
                                            />
                     
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;