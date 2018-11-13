import React from "react"
import H1 from "../components/h1";
import { Link } from "gatsby"


export default () => (
    <div style={{ color: 'purple', backgroundColor: 'transparent'}}>
        <H1 headerText="Hello Worlddddd"/>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <Link to="/about/">About</Link>
        <Link to="/typo/">Typography</Link>
    </div>
)
