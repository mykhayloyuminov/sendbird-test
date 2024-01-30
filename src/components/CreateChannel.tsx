import sendBirdSelectors from '@sendbird/uikit-react/sendbirdSelectors';
import Modal from '@sendbird/uikit-react/ui/Modal';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';

const BOTS = {
  yuminov: 'Sendbird GPT Bot',
} as const;

type Props = {
  onCancel: () => void;
};

export const CreateChannel = ({ onCancel }: Props) => {
  const store = useSendbirdStateContext();
  const createChannel = sendBirdSelectors.getCreateGroupChannel(store);
  return (
    <Modal
      titleText="New Channel"
      hideFooter
      onCancel={onCancel}
      className="sendbird-add-channel__modal"
    >
      <>
        {Object.keys(BOTS).map(botId_ => {
          const botId = botId_ as keyof typeof BOTS;
          const botName = BOTS[botId];
          return (
            <a
              key={botId}
              className="sendbird-add-channel__rectangle"
              onClick={() => {
                createChannel({
                  isDistinct: true,
                  invitedUserIds: [botId, 'qwyeqwoyeriquer'],
                  operatorUserIds: ['qwyeqwoyeriquer'],
                }).finally(() => {
                  onCancel();
                });
              }}
            >
              <p className="sendbird-add-channel__bot-name">{botName}</p>
            </a>
          );
        })}
      </>
    </Modal>
  );
};
