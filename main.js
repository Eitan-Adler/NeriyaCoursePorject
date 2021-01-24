const contacts = [
  {
    id: 1,
    name: "Neriya, bar-lev",
    lastMessage: "hello world",
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
];
const ImgContainer = (props) => (
  <div className="img-container">
    <img className="contact-img" src={props.img} />
  </div>
);
const TextContainer = (props) => (
  <div className="text-container">
    <div className="contact-name">{props.name}</div>
    <div className="contact-last-message">{props.lastMessage}</div>
  </div>
);
const ContactCard = (props) => (
  <div className="contact-card">
    <ImgContainer img={props.img} />
    <TextContainer name={props.name} lastMessage={props.lastMessage} />
  </div>
);

const ChatList = () => (
  <div className="chat-list">
    {contacts.map((contact) => (
      <ContactCard
        key={contact.id}
        name={contact.name}
        lastMessage={contact.lastMessage}
        img={contact.img}
      />
    ))}
  </div>
);

const App = () => (
  <div className="App">
    <ChatList />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
