import '@sendbird/uikit-react/dist/index.css';
import { Channel, SendBirdProvider } from '@sendbird/uikit-react';
import ChannelList from '@sendbird/uikit-react/ChannelList';
import { useState } from 'react';
import { TextInput } from './Input';
// @ts-ignore
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import './index.css';
import { CustomMessageInput } from 'components/CustomMessageInput';
import { CustomChannelHeader } from 'components/CustomChannelHeader';

const App = () => {
  const [currentChannel, setCurrentChannel] = useState<any>({});

  const [query, setQuery] = useState({
    channelListQuery: {
      nicknameContainsFilter: '',
      includeEmpty: true,
    },
  });
  return (
    <div className="app">
      <SendBirdProvider
        appId={'9F6C317F-D955-4591-A0D3-67CDB3D425D7'}
        userId="qwyeqwoyeriquer"
        nickname={'Fawaz'}
        isVoiceMessageEnabled={false}
      >
        <div className="customized-app">
          <div className="sendbird-app__wrap">
            <div className="sendbird-app__channellist-wrap">
              <TextInput
                onChange={e => {
                  setQuery({
                    channelListQuery: {
                      nicknameContainsFilter: e.target.value,
                      includeEmpty: true,
                    },
                  });
                }}
                name="channel-search"
                placeholder="Search"
                icon={<SearchIcon />}
              />

              <ChannelList
                onChannelSelect={channel => {
                  if (channel && channel.url) {
                    setCurrentChannel(channel);
                  } else {
                    setCurrentChannel('');
                  }
                }}
                queries={query}
                // renderHeader={ChannelListHeader}
              />
            </div>
            <div className="sendbird-app__conversation-wrap">
              <Channel
                disableUserProfile={false}
                channelUrl={currentChannel.url}
                isMessageGroupingEnabled={false}
                isReactionEnabled={false}
                renderMessageInput={() => (
                  <CustomMessageInput channel={currentChannel} />
                )}
                renderChannelHeader={() => <CustomChannelHeader />}
                renderCustomSeparator={message => {
                  const currentDate = new Date(message.message.createdAt);

                  const months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                  ];

                  const monthName = months[currentDate.getMonth()];
                  const day = currentDate.getDate();
                  let hours = currentDate.getHours();
                  const minutes = currentDate
                    .getMinutes()
                    .toString()
                    .padStart(2, '0');
                  const amPm = hours >= 12 ? 'PM' : 'AM';

                  // Convert hours to 12-hour format
                  hours = hours % 12 || 12;

                  const formattedDate = `${monthName} ${day}, ${hours}.${minutes} ${amPm}`;

                  console.log(message, 'message');
                  return (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '24px',
                        fontSize: '14px',
                        fontWeight: '700',
                        letterSpacing: '0.14px',
                        color: '#000',
                        fontFamily: 'Manrope',
                      }}
                    >
                      {formattedDate}
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </SendBirdProvider>
    </div>
  );
};

export default App;
