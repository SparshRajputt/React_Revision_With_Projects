import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        name="Sparsh Rajput"
        description="Hi, I am a final year B.Tech student."
        imgUrl="https://plus.unsplash.com/premium_photo-1752881116951-604dca8c8fcc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900"
      />
      <Card
        name="Pranav Chauhan"
        description="Hi, I am a final year MBA student."
        imgUrl="https://images.unsplash.com/photo-1756990683708-afd38ed20f1f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900"
      />
    </div>
  );
};

export default App;
