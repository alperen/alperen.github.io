import React from "react";

import "../scss/components/_profile-photo.scss";

function ProfilePhoto() {
  const profilePhotoDirectory =
    process.env.NODE_ENV == "development" ? "./public/" : "";

  return (
    <div className="c-profile-photo">
      <div>
        <img
          src={`.${profilePhotoDirectory}/img/me.jpg`}
          alt="Alperen Turkoz"
          className="profile-photo"
        />
      </div>
    </div>
  );
}

export default ProfilePhoto;
