const ProfileCard = () => {
  //todo props are missing here
  return (
    <section className="profile__container">
      <h2 className="profile__blue">Nom Prénom</h2>
      <p>
        <strong>Email</strong> : mon email
      </p>
      <p>
        <strong>Adresse</strong> : mon adresse{" "}
      </p>
      <button className="button__offer bck__blue">Label</button>
    </section>
  );
};

export default ProfileCard;
