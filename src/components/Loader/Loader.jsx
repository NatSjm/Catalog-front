import styled, {keyframes} from 'styled-components';
import React from 'react';

const opacityChange = keyframes`
   0%, 100%{
    opacity: 0;
  }

  60%{
    opacity: 1;
  }
`;

const Wrapper = styled.div`
 display: block;
padding: 50px 0;
 & div{
      width: 100px;
      height: 100px;
      border-radius: 100%;
      position: relative;
      margin: 0 auto;
      
      &   span{
           display: inline-block;
          width: 18px;
          height: 18px;
          border-radius: 100%;
          background-color: #373737;
          margin: 35px 5px;
          opacity: 0;
          &:nth-child(1){
              animation: ${opacityChange} 1s ease-in-out infinite;
            }
            
            &:nth-child(2){
              animation: ${opacityChange} 1s ease-in-out 0.33s infinite;
            }
            
            &:nth-child(3){
              animation: ${opacityChange} 1s ease-in-out 0.66s infinite;
            }
      }
 }
`;

class Loader extends React.PureComponent {
    render = () => {
        return <Wrapper>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Wrapper>;
    };
};

export default Loader;
