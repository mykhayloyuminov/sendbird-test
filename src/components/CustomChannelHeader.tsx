import { FC } from 'react';
import styled from 'styled-components';

export const CustomChannelHeader: FC = () => {
  return (
    <Wrapper>
      <Name>Mykhaylo's bot</Name>
      <Desc>1 token / min</Desc>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  gap: 16px;
  border-bottom: 1px solid #f2f2f2;
`;

const Name = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Desc = styled.div`
  font-family: Urbanist;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  display: flex;
  align-items: center;
`;
