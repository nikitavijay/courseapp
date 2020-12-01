import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import infoblock from "../components/Reusable/Infoblock"
import Info from "../components/Reusable/Info"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import CourseCart from "../components/Cart/CourseCart"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      title="I write code"
      subtitle="LCO"
      heroClass="hero-background"
      img={data.img.childImageSharp.fluid}
    />
    <Info heading="About Us" />
    <CourseCart courses={data.mycourses}/>
    <DualInfoblock heading="Our Team" />
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    mycourses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
          ...GatsbyContentfulFixed_tracedSVG

            }
          }
        }
      }
    }
  }
`
export default IndexPage
