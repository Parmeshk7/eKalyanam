import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
// import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
import { Link, useNavigate } from "react-router-dom";
// import "./Profile.css";
import styled from "styled-components";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/login");
//     }
//   }, [isAuthenticated]);

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {/* <MetaData title={`${user.name}'s Profile`} /> */}
          <div className="profileContainer">
            {user.role ==="admin" ? (<div>
            <Link to="/me/update">Add Product</Link>
            <Link to="/me/update">Delete Product</Link>
            </div>) : (
            <div>
              <h1>My Profile</h1>
              <img src="./images/avtar.png" alt={user.name} />
              {/* <Link to="/me/update">Edit Profile</Link> */}
            </div>)}
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                {/* <Link to="/password/update">Change Password</Link> */}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`

.profileContainer {
  display: flex;
  height: 100vh;
  width: 100vw;
  /* position: ; */
  top: 0%;
  left: 0%;
  max-width: 100%;
  background-color: white;
}

.profileContainer > div {
  display: flex;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profileContainer > div:first-child > h1 {
  color: rgba(0, 0, 0, 0.555);
  font: 500 2.2vmax "Roboto";
  transform: translateX(-10vmax) translateY(-2vmax);
}

.profileContainer > div:first-child > img {
  width: 20vmax;
  border-radius: 100%;
  transition: all 0.5s;
}

.profileContainer > div:first-child > img:hover {
  transform: scale(1.05);
}

.profileContainer > div:first-child > a {
  border: none;
  background-color: tomato;
  font: 400 1vmax "Roboto";
  color: white;
  text-decoration: none;
  padding: 0.5vmax;
  width: 30%;
  margin: 4vmax;
  text-align: center;
  transition: all 0.5s;
}

.profileContainer > div:first-child > a:hover {
  background-color: rgb(204, 78, 56);
}

.profileContainer > div:last-child {
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 5vmax;
  box-sizing: border-box;
}

.profileContainer > div:last-child > div > h4 {
  color: black;
  font: 400 1.2vmax "Roboto";
}

.profileContainer > div:last-child > div > p {
  color: rgba(0, 0, 0, 0.418);
  font: 400 1vmax cursive;
  margin: 0.2vmax;
}

.profileContainer > div:last-child > div:last-child {
  display: flex;
  flex-direction: column;
  width: 60%;
}

.profileContainer > div:last-child > div:last-child > a {
  border: none;
  background-color: rgb(68, 68, 68);
  font: 400 1vmax "Roboto";
  color: white;
  text-decoration: none;
  padding: 0.5vmax;
  text-align: center;
  transition: all 0.5s;
  margin: 1vmax 0;
}

.profileContainer > div:last-child > div:last-child > a:hover {
  background-color: rgb(31, 31, 31);
}

@media screen and (max-width: 600px) {
  .profileContainer {
    flex-direction: column;
  }

  .profileContainer > div:first-child > h1 {
    font: 500 3.2vmax "Roboto";
    transform: translateY(-2vmax);
  }

  .profileContainer > div:first-child > a {
    font: 400 1.7vmax "Roboto";
    padding: 1vmax;
  }

  .profileContainer > div:last-child {
    text-align: center;
    align-items: center;
  }

  .profileContainer > div:last-child > div > h4 {
    font: 400 2.5vmax "Roboto";
  }

  .profileContainer > div:last-child > div > p {
    font: 400 2vmax cursive;
    margin: 0.5vmax 0;
  }

  .profileContainer > div:last-child > div:last-child > a {
    font: 400 1.8vmax "Roboto";
    padding: 1vmax;
    margin: 2vmax 0;
  }
}
`

export default Profile;