import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
class HeroSection extends Component {
  constructor(props) {
    super(props)
  }
  render() {
      console.log(this.props)
    return (
      <div>
        <BackgroundImage
          className={this.props.heroClass}
          fluid={this.props.img}
        >
          <h1 className="text-white display-4">{this.props.title}</h1>
          <h4 className="text-warning">{this.props.subtitle}</h4>
        </BackgroundImage>
      </div>
    )
  }
}

export default HeroSection
