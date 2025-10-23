import avatar from "../img/avatar.png";
function ProfileCard({ name, job }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt="Profile Card" />
      <h3>{name}</h3>
      <p>{job}</p>
    </div>
  );
}

export default ProfileCard;
