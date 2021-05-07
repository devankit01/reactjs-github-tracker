import React from "react";
import { useState } from "react";
function Github() {
  const [search, setSearch] = useState("devankit01");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form");
    getData();
  };

  const getData = async (search) => {
    const response = await fetch(`https://api.github.com/users/${search}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <div className="git__section">
        <div className="git__search">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Enter Github User"
            ></input>
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="git__info">
          <div className="info__wrap">
            <div className="info__card">
              <div className="info__content__icon">
                <i class="fas fa-atlas"></i>
              </div>
              <div className="info__content__text">
                <h3>52</h3>
                <span className="text__light">Repos</span>
              </div>
            </div>

            <div className="info__card">
              <div className="info__content__icon">
                {/* <i class="fas fa-user-friends"></i> */}
                <i class="fa fa-users"></i>
              </div>
              <div className="info__content__text">
                <h3>10</h3>
                <span className="text__light">Followers</span>
              </div>
            </div>

            <div className="info__card">
              <div className="info__content__icon">
                <i class="far fa-user"></i>
              </div>
              <div className="info__content__text">
                <h3>2</h3>
                <span className="text__light">Following</span>
              </div>
            </div>

            <div className="info__card">
              <div className="info__content__icon">
                <i class="fas fa-code"></i>
              </div>
              <div className="info__content__text">
                <h3>0</h3>
                <span className="text__light">Gists</span>
              </div>
            </div>
          </div>
        </div>

        <div className="git__user">
          <div className="user__info">
            <div className="user__info__details">
              <img
                src="https://avatars.githubusercontent.com/u/1?v=4"
                alt=""
                style={{ float: "left" }}
              ></img>
              <b>
                <span style={{ float: "right" }}>Ankit Gupta</span>
              </b>
              <p class="text__light" style={{ float: "right" }}>
                @devankit01
              </p>
            </div>
            <br />
            <br />
            <br />

            <div className="user__bio">
              <span>
                Python Developer | JavaScript Developer | Front end Dev
              </span>

              <div className="user__extra">
                <p>
                  <i class="far fa-building"></i>&nbsp;Coding Addict
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>&nbsp;Lucknow, India
                </p>
                <p>
                  <i class="fas fa-paperclip"></i>&nbsp;www.medev.in
                </p>
              </div>
              <button className="btn">Follow</button>
            </div>
          </div>
          <div className="user__repos">
            <h4>Repositories</h4>
            <div className="repos">
              <div className="repo__card">
                <div className="icon">
                  <i class="fab fa-codepen"></i>
                </div>
                <div className="repo__info">
                  <h5>30daysofcode</h5>
                  <a href="" className="text_light">
                    Clone now &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
