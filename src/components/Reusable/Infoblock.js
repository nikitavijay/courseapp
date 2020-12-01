import React, { Component } from "react"
import { Heading } from "./Heading"
import { Link } from "gatsby"
class infoblock extends Component {
  render(props) {
    return (
      <section className="bg-theme my-5 py-4 ">
        <div className="container">
          <Heading title={this.props.heading} />
          <div className="row">
            <div className="col-10 mx-auto text-center">
              <p className="lead text-white mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                excepturi aspernatur harum voluptatum. Nisi, veritatis nobis? Ea
                vel enim delectus cupiditate optio aspernatur nobis nostrum
                suscipit soluta tenetur asperiores placeat odio similique
                dolores quaerat est, a maxime libero quod error!
              </p>
              <Link to="/about">
                <button className="btn btn-warning btn-lg">{this.props.heading}</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default infoblock
