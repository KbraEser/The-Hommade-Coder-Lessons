import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  return (
    <>
      <ProfileCard name="John Doe" job="Software Engineer" />
      <ProfileCard name="Mike Smith" job="UI/UX Designer" />
      <ProfileCard name="Angela Yu" job="Full Stack Developer" />
    </>
  );
}

export default App;
