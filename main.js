const UserInfo = {
  name: "Eitan Adler",
  status: "online",
  img:
    "https://www.creativefabrica.com/wp-content/uploads/2019/12/04/AVATAR_FINAL_2-6-580x386.jpg",
};
const ChatBox = ({ contactName }) => (
  <div className="chat-box-header">
    {contactName ? (
      <div>
        <span>{contactName}</span>
      </div>
    ) : (
      <div>no chat</div>
    )}
  </div>
);

const ContactCard = ({
  name,
  lastMessage,
  img,
  ChatBoxNameToChange,
  muted,
  toggleMute,
}) => (
  <div className="contact-card" onClick={ChatBoxNameToChange}>
    <img className="contact-img" src={img} />

    <div className="text-container">
      <div className="contact-name">
        {name}
        {muted ? (
          <span onClick={toggleMute}> unmute</span>
        ) : (
          <span onClick={toggleMute}> mute</span>
        )}
      </div>

      <div className="contact-last-message">
        {lastMessage.length > 30
          ? `${lastMessage.slice(0, 30)}...`
          : lastMessage}
      </div>
    </div>
  </div>
);

const ChatList = ({ contacts, ChatBoxNameToChange, muted, toggleMute }) => (
  <div className="chat-list">
    {contacts.map(({ id, name, lastMessage, img }) => (
      <ContactCard
        key={id}
        name={name}
        lastMessage={lastMessage}
        img={img}
        ChatBoxNameToChange={() => ChatBoxNameToChange(name)}
        muted={muted.includes(id) ? true : false}
        toggleMute={() => toggleMute(id)}
      />
    ))}
  </div>
);

const UserProfile = () => (
  <div className="user-profile">
    <img className="user-img" src={UserInfo.img} />
    <div className="user-profile-text-container">
      <div className="user-name">{UserInfo.name}</div>
      <div className="user-status">{UserInfo.status}</div>
    </div>
  </div>
);
const SideBar = ({ contacts, ChatBoxNameToChange, muted, toggleMute }) => (
  <div className="side-bar">
    <UserProfile />
    <ChatList
      contacts={contacts}
      ChatBoxNameToChange={ChatBoxNameToChange}
      muted={muted}
      toggleMute={toggleMute}
    />
  </div>
);
class App extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Neriya, bar-lev",
        lastMessage:
          "Hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world ",
        img:
          "https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg",
      },
      {
        id: 2,
        name: "Dana",
        lastMessage: "hello world",
        img:
          "https://cdn5.vectorstock.com/i/1000x1000/06/59/template-avatars-blonde-girl-vector-4930659.jpg",
      },
      {
        id: 3,
        name: "Gershon",
        lastMessage: "hello world",
        img:
          "https://cdn3.vectorstock.com/i/1000x1000/38/17/male-face-avatar-logo-template-pictograph-vector-11333817.jpg",
      },
      {
        id: 4,
        name: "Yossi",
        lastMessage: "hello world",
        img:
          "https://cdn2.vectorstock.com/i/1000x1000/38/21/male-face-avatar-logo-template-pictograph-vector-11333821.jpg",
      },
      {
        id: 5,
        name: "Dani",
        lastMessage: "hello world",
        img:
          "https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg",
      },
      {
        id: 6,
        name: "Saba",
        lastMessage: "hello world",
        img:
          "https://cdn1.vectorstock.com/i/1000x1000/37/65/male-face-avatar-logo-template-pictograph-vector-11333765.jpg",
      },
      {
        id: 7,
        name: "family group",
        lastMessage: "hello world",
        img:
          "https://previews.123rf.com/images/yupiramos/yupiramos1703/yupiramos170316303/74735483-young-people-avatars-group-vector-illustration-design.jpg",
      },
    ],
    contactChatName: null,
    muted: [],
  };
  toggleMute = (id) => {
    let newArray = [];
    const oldAraay = this.state.muted;
    oldAraay.includes(id)
      ? (newArray = oldAraay.filter((filterID) => filterID !== id))
      : (newArray = [...oldAraay, id]);
    return this.setState({ muted: newArray });
  };
  render() {
    const { contacts, contactChatName, muted } = this.state;
    return (
      <div className="App">
        <SideBar
          contacts={contacts}
          ChatBoxNameToChange={(name) =>
            this.setState({ contactChatName: name })
          }
          muted={muted}
          toggleMute={this.toggleMute}
        />
        <ChatBox contactName={contactChatName} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
