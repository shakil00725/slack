import React from 'react';
import {Container, SubContainer}  from './MetalStyled';
import CustomizedExpansionPanels from '../../ExpansionMenu';

const DetailsPanel = ({channel}) => (
  <Container>
      <SubContainer>
          <div>
            <h1>About # {channel && channel.name}</h1>
          </div>
          <div>
            <CustomizedExpansionPanels channel={channel} />
          </div>
      </SubContainer>
  </Container>
);
export default DetailsPanel;