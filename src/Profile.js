import React from "react";

const Profile = () => {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Profile</h3>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              value={localStorage.getItem("first_name")}
              readOnly
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              value={localStorage.getItem("last_name")}
              readOnly
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone number</label>
            <input
              type="number"
              className="form-control mt-1"
              value={localStorage.getItem("phone_number")}
              readOnly
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Profile;
