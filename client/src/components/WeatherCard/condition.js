import React from 'react';
import styled from '@emotion/styled'

const Condition = (props) => {
    
    const Temp = styled.h1`
    font-family: 'Fira Sans', sans-serif;
    font-size: 2rem;
    font-weight: 200;
    `

    const State = styled.h3`
    font-family: 'Marriwether', sans-serif;
    font-size: 1.2rem;
    `
    
    return ( 
        <>
        <Temp> 20° </Temp>
        <State className='condition'> Clouds </State>
        </>
     );
}
 
export default Condition;