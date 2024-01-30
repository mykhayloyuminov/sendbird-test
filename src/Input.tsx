import styled from 'styled-components';
import { FC } from 'react';

interface IProps {
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
}

export const TextInput: FC<IProps> = ({ icon, ...args }) => {
  return (
    <Wrapper>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Input type="text" hasIcon={!!icon} {...args} />
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input<{ hasIcon?: boolean }>`
  width: 100%;
  border-radius: 16px;
  box-sizing: border-box;
  font-family: 'Urbanist', sans-seriff;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #f2f2f2;
  padding: 16px;
  box-shadow: 0px 16px 40px -7px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: #0e0e0e;
    opacity: 1; /* Firefox */
  }

  padding-left: ${props =>
    props.hasIcon ? '48px' : '16px'}; // Adjust padding for the icon
`;

const Wrapper = styled.div`
  position: relative;
  height: 56px;
  width: 100%;
`;
