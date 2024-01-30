import React, { useState } from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@material-ui/core'; // @ts-ignore
import { ReactComponent as SendIcon } from 'assets/send.svg';
import styled from 'styled-components';
import {
  sendbirdSelectors,
  useSendbirdStateContext,
} from '@sendbird/uikit-react';

export const CustomMessageInput = (props: any) => {
  // props
  const {
    channel,
    disabled,
    // from mapStoreToProps
  } = props;

  // state
  const [inputText, setInputText] = useState('');
  const isInputEmpty = inputText.length < 1;
  const globalStore = useSendbirdStateContext();
  const sdk = sendbirdSelectors.getSdk(globalStore);
  // event handler
  const handleChange = (event: any) => {
    setInputText(event.target.value);
  };

  const sendUserMessage_ = async (event: any) => {
    const params: any = {};
    params.message = inputText;
    sendbirdSelectors
      .getSendUserMessage(globalStore)(channel, params)
      .onSucceeded(message => {
        console.log(message);
        setInputText('');
      })
      .onFailed(error => {
        console.log(error.message);
      });
  };

  return (
    <Wrapper className="customized-message-input">
      <FormControl variant="outlined" disabled={disabled} fullWidth>
        <OutlinedInput
          style={{
            height: '72px',
            padding: '8px 16px',
            borderRadius: '30px',
            boxShadow: '0px 16px 40px -7px rgba(0, 0, 0, 0.05)',
          }}
          placeholder="Type your Message"
          type="txt"
          value={inputText}
          onChange={handleChange}
          multiline
          onKeyDown={event => {
            if (event.key === 'Enter') {
              sendUserMessage_(event);
              // Дополнительный код, который должен выполняться при нажатии Enter
            }
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                disabled={disabled}
                onClick={sendUserMessage_}
                style={{
                  padding: '16px',
                  borderRadius: '16px',
                  backgroundColor: '#D2375D',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: '700',
                  gap: '4px',
                }}
                // onMouseDown={sendUserMessage}
              >
                Send
                <SendIcon style={{ marginLeft: '4px' }} />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & .MuiInputBase-root {
    & .MuiInputBase-input {
      color: #0e0e0e;
    }

    & .MuiInputBase-input::placeholder {
      color: #0e0e0e;
    }
  }

  & .MuiOutlinedInput-root {
    & .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }
`;
