import { useState } from "react";

const ProfileEditing = () => {
  const savedUser = JSON.parse(localStorage.getItem("registeredUser")) || {};

  const [editedUsername, setEditedUsername] = useState(
    savedUser.username || ""
  );
  const [editedEmail, setEditedEmail] = useState(savedUser.email || "");
  const [editedPassword, setEditedPassword] = useState(
    savedUser.password || ""
  );
  const [editedAvatar, setEditedAvatar] = useState(savedUser.avatar || "");
  const [editedErrors, setEditedErrors] = useState([]);

  const usernameErrorCheck = () => {
    const editingUsernameError = [];

    if (!editedUsername.trim()) {
      editingUsernameError.push("username must not be empty");
    } else {
      const user = JSON.parse(localStorage.getItem("registeredUser"));
      user.username = editedUsername;
      localStorage.setItem("registeredUser", JSON.stringify(user));
    }
    setEditedErrors(editingUsernameError);
  };

  const emailErrorCheck = () => {
    const editingEmailError = [];

    if (!editedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editedEmail)) {
      editingEmailError.push(
        "email must be a valid email address and must not be empty"
      );
    } else {
      const user = JSON.parse(localStorage.getItem("registeredUser"));
      user.email = editedEmail;
      localStorage.setItem("registeredUser", JSON.stringify(user));
    }
    setEditedErrors(editingEmailError);
  };

  const passwordErrorCheck = () => {
    const editingPasswordError = [];
    if (editedPassword.length < 4 || editedPassword.length > 40) {
      editingPasswordError.push(
        "new password must be between 6 and 40 characters"
      );
    } else {
      const user = JSON.parse(localStorage.getItem("registeredUser"));
      user.password = editedPassword;
      localStorage.setItem("registeredUser", JSON.stringify(user));
    }
    setEditedErrors(editingPasswordError);
  };

  const AvatarErrorCheck = () => {
    const editingAvatarError = [];
    try {
      const user = JSON.parse(localStorage.getItem("registeredUser"));
      user.avatar = editedAvatar;
      localStorage.setItem("registeredUser", JSON.stringify(user));
    } catch {
        errors.push("avatar image must be a valid URL");
    }
    setEditedErrors(editingAvatarError);
  };

  return (
    <div className="editing">
      <form action="" className="editing-form">
        <h1 className="editing-title">Edit your profile</h1>
        <p className="editing-text">
          Please fill in this form to edit your profile.
        </p>
        {editedErrors.length > 0 && (
          <ul className="editing-errors-list">
            {editedErrors.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        )}
        <div className="editing-inputs">
          <label>
            <b>New username</b>
          </label>
          <input
            type="text"
            value={editedUsername}
            placeholder="Enter new username"
            onChange={(el) => setEditedUsername(el.target.value)}
          />
          <button
            className="editing-btn"
            type="button"
            onClick={usernameErrorCheck}
          >
            confirm
          </button>
          <label>
            <b>New email</b>
          </label>
          <input
            type="text"
            value={editedEmail}
            placeholder="Enter new email"
            onChange={(el) => setEditedEmail(el.target.value)}
          />
          <button
            className="editing-btn"
            type="button"
            onClick={emailErrorCheck}
          >
            confirm
          </button>
          <label>
            <b>New password</b>
          </label>
          <input
            className="editing-password"
            type="password"
            value={editedPassword}
            placeholder="Enter new password"
            onChange={(el) => setEditedPassword(el.target.value)}
          />
          <button
            className="editing-btn"
            type="button"
            onClick={passwordErrorCheck}
          >
            confirm
          </button>
          <label>
            <b>Avatar URL</b>
          </label>
          <input
            type="text"
            value={editedAvatar}
            placeholder="Enter new avatar"
            onChange={(e) => setEditedAvatar(e.target.value)}
          />
          <button
            className="editing-btn"
            type="button"
            onClick={AvatarErrorCheck}
          >
            confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditing;
