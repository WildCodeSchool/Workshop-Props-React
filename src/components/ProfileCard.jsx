const ProfileCard = ({
  firstName,
  lastName,
  email,
  userAdress,
  buttonLabel,
  color,
  hasLabel,
}) => {
  console.log(hasLabel);

  if (hasLabel) {
    console.log("AFFICHE UN BOUTON");
    // affiche moi un bouton
  }

  hasLabel && console.log("affiche un bouton");

  //todo props are missing here
  return (
    <section className="profile__container">
      <h2 className={`profile__${color}`}>
        {firstName} {lastName.toUpperCase()}
      </h2>
      <p>
        <strong>Email</strong> : {email}
      </p>
      <p>
        <strong>Adresse</strong> : {userAdress}
      </p>
      {hasLabel && (
        <button className={`button__offer bck__${color}`}>{buttonLabel}</button>
      )}
    </section>
  );
};

export default ProfileCard;
