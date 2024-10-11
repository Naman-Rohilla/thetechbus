import "./profileCard.scss";

export default function ProfileCard({ img, name, designation, summary }) {
  return (
    <>
      <div className="profile-card-container">
        <div className="profile-img">
          <div>
            <img
              width={"100%"}
              height={"100%"}
              style={{
                borderRadius: "100%",
              }}
              src={img}
            />
          </div>
          <div>
            <span>{name}</span>
            <span>{designation}</span>
          </div>
        </div>
        <div className="profile-description">
          <span>{summary}</span>
        </div>
      </div>
    </>
  );
}
