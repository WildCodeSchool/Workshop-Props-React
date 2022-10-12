import ProfileCard from "./ProfileCard";
import { userDavid, userGreg } from "../utils/userData";

const Profile = () => {
  // const user = {
  //   firstName: "David",
  //   lastName: "Faure",
  //   email: "test@test.com",
  //   userAdress: "10 rue des David",
  //   buttonLabel: "Détails",
  // };

  return (
    <section className="container">
      {/* props are missing here */}
      <ProfileCard {...userDavid} />
      <ProfileCard {...userGreg} />
      <ProfileCard {...userGreg} />
    </section>
  );
};

export default Profile;
