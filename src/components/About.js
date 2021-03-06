import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Element  } from 'react-scroll'



export default class About extends React.Component {
    render() {
        return (
            <StaticQuery query={graphql`
                query aboutQuery {
                    about:datoCmsAboutPage {
                        title
                        subtitle
                        bio
                      }
                }
            `}
                render={data => {
                        const { about } = data
                        return(
                            <div className="about_container">
                            <div className="about_content">
                                <div className="about_text">
                                   <Element name="about"> <h1> {about.title} </h1> </Element> 
                                    <h2>{about.subtitle}</h2>
                                    <p >{about.bio}</p>
                            </div>
                            </div>
                        </div>
                        )    
                }}
            />

        )
    }
}