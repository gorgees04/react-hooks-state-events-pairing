import video from "../data/video.js";
import Desciption from "./Desciption.js";
import Title from "./Title.jsx";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Title
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
      />
      <Desciption data={video} />
    </div>
  );
}

export default App;
