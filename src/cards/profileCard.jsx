import "./profileCard.scss";

export default function ProfileCard() {
  return (
    <>
      <div className="profile-card-container">
        <div className="profile-img">
          <div></div>
          <div>
            <span>Name</span>
            <span>Designation</span>
          </div>
        </div>
        <div className="profile-description">
          <span>
            I've never met a web developer who cares about success like
            TheTechBus does.
          </span>
        </div>
      </div>
    </>
  );
}
