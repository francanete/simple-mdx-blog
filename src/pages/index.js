import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"



const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard 
          date="March 22, 2020" 
          title="Lorem ipsum dolor sit amet"  
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet lacus, fusce scelerisque viverra sagittis vulputate orci, cursus. Volutpat auctor penatibus cras faucibus. In et bibendum mauris rutrum vitae nunc, porttitor sed. Vitae lobortis tristique risus nam neque, viverra. Volutpat enim tempus egestas eget ac at mi." 
          slug="/test" 
          />
      </Content>
    </Container>
  )
}



export default IndexPage