import React from "react";
import "./Followers.css";
import data from "./data.json";

export function Followers() {
  return (
    <div className={"container"}>
      <h4>Users Following you</h4>
      <div className={"content"}>
        {data.map((d) => {
          return (
            <FollowerUser
              followersCount={d.followersCount}
              profession={d.profession}
              img={d.img}
              name={d.name}
            />
          );
        })}
      </div>
    </div>
  );
}

function FollowerUser({
  followersCount,
  name,
  profession,
  img,
}: FollowerUserProps) {
  return (
    <div className={"follower_container"}>
      <img src={img} className={"userimg"} />
      <p className={"name"}>{name}</p>
      <p className={"profession"}>{profession}</p>
      <p className={"count"}>{followersCount} Followers</p>
      <button>Follow</button>
    </div>
  );
}

interface FollowerUserProps {
  img: string;
  name: string;
  profession: string;
  followersCount: number;
}
