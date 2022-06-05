import React from 'react'
import styledComponents from 'styled-components'
import Parth from './Parth'
import Parthh from './Parthh'

function Home() {
  return (
      <HiIamContainer>

      <Parth
      title="model X"
      description="test"
      backgroundImg="model-x.jpg"  
      />

      <Parthh
      title="model Y"
      description="test"
      backgroundImg="model-y.jpg"  
      />
      <Parthh
      title="model S" 
      description="test" 
      backgroundImg="model-s.jpg"   
       />  
       <Parth
      title="model Z" 
      description="test" 
      backgroundImg="new-interior.jpg"   
       />  

      </HiIamContainer>

  )
}

export default Home
const HiIamContainer=styledComponents.div``