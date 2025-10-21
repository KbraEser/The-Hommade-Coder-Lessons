import avatar from "../img/avatar.png";

function ProfileCards() {
  return (
    <div className="profile-card">
      <h2>John Doe</h2>
      <img src={avatar} alt="Profile Picture" />
    </div>
  );
}

export default ProfileCards;
