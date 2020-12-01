import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"
import { resetWarningCache } from "prop-types"
class CourseCart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.courses.edges)
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="courses" />
          <div className="row">
            {this.props.courses.edges.map(node => {
              return (
                <div
                  key={node.id}
                  className="col-11 d-flex mx-auto col-md-6 mb-3"
                >
                  <Img fixed={node.node.image.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.node.title}</h6>
                      <h6 className="mb-0 text-success">{node.node.price}</h6>
                    </div>
                    <p className="text-muted">
                      {node.node.description.description}
                    </p>
                    <button
                      className="btn btn-warning snipcart-add-item mt-2 mx-auto"
                      data-item-id={node.node.id}
                      data-item-url="www.lco.com"
                      data-item-name={node.node.title}
                      data-item-price={node.node.price}
                    >
                      Join Now
                    </button>
                  </div>
                  {/* {node.node.category} */}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default CourseCart
