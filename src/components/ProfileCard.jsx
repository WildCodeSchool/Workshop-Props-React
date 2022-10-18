const ProfileCard = () => {
  //todo props are missing here
  return (
    <section className='profile__container'>
      <h2 className='profile__blue'>Name Firstname</h2>
      <p>
        <strong>Email</strong> : my email
      </p>
      <p>
        <strong>Address</strong> : my address
      </p>
      <button className='button__offer bck__blue'>Label</button>
    </section>
  );
};

export default ProfileCard;
