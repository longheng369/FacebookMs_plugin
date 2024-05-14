// import FacebookMs from "./components/FacebookMs";
import MessengerCustomerChat from 'react-messenger-customer-chat';
function App() {
  return (
    <>
      <h1>hello world</h1>
      {/* <FacebookMs /> */}
      <MessengerCustomerChat
        pageId="427377029894331"
        appId="141916528997399"
        htmlRef="my-messenger-plugin"
      />
    </>
  );
}

export default App;
