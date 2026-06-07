import "./UserCard.css";
import userIcon from "../assets/user-icon.png";
import upVote from "../assets/vote-up.svg";
import downVote from "../assets/vote-down.svg";
import { SearchContext } from "./SearchContext";
import { useEffect, useState, useContext } from "react";

function UserCard() {
  const [users, setUsers] = useState([]);

  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="userCardContainer">
      <h2>All Users</h2>

      {users
        .filter((user) => {
          if (searchTerm === "") return true;
          return user.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        .map((user) => (
          <div key={user.id} className="userCardBox">
            <img
              src={userIcon}
              width="128px"
              style={{
                borderRadius: "50%",
                border: "2px solid rgba(185, 185, 185, 0.22)",
              }}
            />
            <h3>{user.name}</h3>
            <p>Username: @{user.username}</p>
            <p>Email: {user.email}</p>
            <div className="vote">
              <div className="voteContent">
                <img
                  src={upVote}
                  width="22px"
                  style={{
                    cursor: "pointer",
                    opacity: 0.5,
                    filter: user.isUpvoted
                      ? "invert(48%) sepia(79%) saturate(2476%) hue-rotate(336deg) brightness(101%) contrast(101%)"
                      : "none",
                  }}
                  onClick={() => {
                    if (user.isUpvoted) {
                      user.vote = (user.vote || 0) - 1;
                      user.isUpvoted = false;
                    } else {
                      user.vote = (user.vote || 0) + 1;
                      user.isUpvoted = true;
                      if (user.isDownvoted) user.isDownvoted = false;
                    }
                    setUsers([...users]);
                  }}
                />

                <p>{user.vote || 0}</p>
                <span>|</span>

                <img
                  src={downVote}
                  width="22px"
                  style={{
                    cursor: "pointer",
                    opacity: 0.5,
                    filter: user.isDownvoted
                      ? "invert(48%) sepia(79%) saturate(2476%) hue-rotate(336deg) brightness(101%) contrast(101%)"
                      : "none",
                  }}
                  onClick={() => {
                    if (user.isDownvoted) {
                      user.isDownvoted = false;
                    } else {
                      user.isDownvoted = true;
                      if (user.isUpvoted) {
                        user.vote = (user.vote || 0) - 1;
                        user.isUpvoted = false;
                      }
                    }
                    setUsers([...users]);
                  }}
                />
              </div>

              <div className="button">
                <button
                  onClick={() => {
                    user.isFollowed = !user.isFollowed;
                    setUsers([...users]);
                  }}
                >
                  {user.isFollowed ? "Followed" : "Follow"}
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default UserCard;
