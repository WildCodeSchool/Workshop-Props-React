const ProfileCard = ({
  firstName,
  lastName,
  userEmail,
  userAdress,
  buttonLabel,
  color,
  button,
}) => {
  //todo props are missing here
  return (
    <section className="profile__container">
      <h2 className={`profile__${color}`}>
        {firstName} {lastName}{" "}
      </h2>
      <p>
        <strong>Email</strong> : {userEmail}
      </p>
      <p>
        <strong>Adresse</strong> : {userAdress}
      </p>
      {button && (
        <button className={`button__offer bck__${color}`}>{buttonLabel}</button>
      )}{" "}
    </section>
  );
};

export default ProfileCard;
