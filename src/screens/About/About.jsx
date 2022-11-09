import React from 'react'
import "./About.css"

function About() {
  return (

<div className ="container">
<h1 className = "heading"><span>meet  </span> Our Team</h1>

<div className = "profiles">
  <div className = "profile">
    <img src = "https://media-exp1.licdn.com/dms/image/D5603AQEMgKp6o5bTCg/profile-displayphoto-shrink_400_400/0/1665588615656?e=1673481600&v=beta&t=1bele8LmrTvlglpFgQ6xDgUbsy1d8YiVmgGe2WFYigw" class = "profile-img">
    </img>

    <h3 className = "user-name">Mateo</h3>
    <h5>Elite Chess Player</h5>
    <p>Makes Magnus Carlsen look like a kindergartener and he's no slouch when it comes to coding!
       </p>
          
  </div>

</div>

<div class = "profiles">
  <div class = "profile">
    <img src = "https://ca.slack-edge.com/T0351JZQ0-U03RZMQS50X-09bcb6b6cccc-512" class = "profile-img">
    </img>

    <h3 class = "user-name">Alexis</h3>
    <h5>Back End </h5>
    <p>Cool dude and a  back-end logic whiz! With his and Mateo's combined strength, they're an unstoppable force!
    </p>
  </div>

</div>

<div class = "profiles">
  <div class = "profile">
    <img src = "
https://ca.slack-edge.com/T0351JZQ0-U03S7LK3DPG-cc3b6e5026c0-512
" class = "profile-img">
    </img>

    <h3 class = "user-name">Luis</h3>
    <h5> Front End</h5>
    <p>Without this man, routes and most of the front end wouldn't be possible.  </p>
  </div>

</div>


<div class = "profiles">
  <div class = "profile">
    <img src = "https://media-exp1.licdn.com/dms/image/C4E03AQGkoqISDwhAvg/profile-displayphoto-shrink_800_800/0/1630614273542?e=1673481600&v=beta&t=TX-sIrEsJKQNHpXuoXBFmpYA0UVS3IXqPlIKgnOg_RE" class = "profile-img">
    </img>

    <h3 class = "user-name">Marty</h3>
    <h5> Figmagician</h5>
    <p>Can create amazing figma animations and transitions. (If only anima worked... -.-)  </p>
  </div>

</div>


<div class = "profiles">
  <div class = "profile">
    <img src = "https://ca.slack-edge.com/T0351JZQ0-U03SSTW8VTK-25896eff75b7-512" class = "profile-img">
    </img>

    <h3 class = "user-name">Ethan</h3>
    <h5> Joe Shmoe!</h5>
    <p> Just your average joe that's just here</p>
  </div>

</div>

</div >

  )
}
export default About;