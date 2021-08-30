import React, {Fragment} from 'react'

//icon/image
import {FaReact} from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import webdev from './web-development.png'

const About = () => {
    return (
        <Fragment>
            <div className="h-cph p-4">
                <div className="text-center mb-20">
                    <div className="text-3xl">
                        About the App
                    </div>
                    <div className="text-9xl content-center my-2">
                        <FaReact />
                        <AiFillGithub />
                    </div>
                    <p>
                        This is a reactjs app that uses hooks, context and Github API.
                    </p>
                </div>
                <div className="text-center">
                    <div className="text-3xl">
                        About the Developer
                    </div>
                    <div className="content-center my-2">
                        <img src={webdev} alt="" className="w-1/4"/>
                    </div>
                    <p>
                        Front-ent software engineer with six years of experience using HTML, CSS, jQuery
                        and JavaScript. I am in the process of learning ReactJS. This is my first ReactJS
                        app.
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default About
