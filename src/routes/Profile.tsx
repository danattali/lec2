import auth from "../services/auth";

const Profile = () => {
    const userId = localStorage.getItem("user_id") ?? "no user id";
    auth
        .userDetails(userId)
        .then((res) => {
            console.log(res.data);
        })
        .catch((e) => {
            console.log(e);
        });

    return <div>{localStorage.getItem("user_id") ?? "no user id"} </div>;
};

export default Profile;