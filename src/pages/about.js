import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Info from '../components/Reusable/Info'
import DualInfoblock from "../components/Reusable/DualInfoblock"
const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    title="I write code"
    subtitle=""
    heroClass="about-background"
    img= {data.img.childImageSharp.fluid}
    />
    <Info heading="About Us"/>
    <DualInfoblock heading="Our Team"/>
  </Layout>
)
export const query =graphql`
{
  img: file(relativePath:{eq:"about.png"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`
export default AboutPage
