import { useState } from 'react';

import Icon from '@sendbird/uikit-react/ui/Icon';
import IconButton from '@sendbird/uikit-react/ui/IconButton';

import { CreateChannel } from './CreateChannel';

export const ChannelListHeader = () => {
  const [showCreateChannel, setShowCreateChannel] = useState<boolean>(false);
  return (
    <div className="sendbird-channel-list-header">
      <h4>Channels</h4>
      <IconButton
        type="button"
        height={'36'}
        width={'36'}
        onClick={() => setShowCreateChannel(true)}
      >
        <Icon type="CREATE" fillColor="PRIMARY" />
      </IconButton>
      {showCreateChannel && (
        <CreateChannel onCancel={() => setShowCreateChannel(false)} />
      )}
    </div>
  );
};
