import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <section className="container">
      {/* props are missing here */}
      <ProfileCard
        firstName="David"
        lastName="Faure"
        userEmail="user@example.com"
        userAdress="10 rue des David, 33000 Bordeaux"
        buttonLabel="Plus d'infos"
        color="blue"
        button
      />
      <ProfileCard
        firstName="Florian"
        lastName="Angular"
        userEmail="user@example.com"
        userAdress="10 rue des Florian, 33000 Bordeaux"
        buttonLabel="Plus d'infos"
        color="red"
      />
      <ProfileCard
        firstName="Jean"
        lastName="Le Grand"
        userEmail="user@example.com"
        userAdress="10 rue des Grands, 33000 Bordeaux"
        buttonLabel="Plus d'infos"
        color="green"
        button
      />
    </section>
  );
};

export default Profile;
