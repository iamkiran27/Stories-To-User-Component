import React, { useState } from "react";

import WomanOutlinedIcon from "@mui/icons-material/WomanOutlined";
import { BoyOutlined } from "@mui/icons-material";

export default function MainPage() {
  const [name, setname] = useState("");
  const [isNumber, setisNumber] = useState(true);
  const [img, setimg] = useState("");
  const [genderImg, setgenderImg] = useState("");

  const images = [
    {
      age: "0-10",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxre5y4TWgJZJ-zMLidm2CthO4VyO6e03Dcg&usqp=CAU",
    },
    {
      age: "11-20",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3qwP2sSJMZ80GshjcHp39fdUP0saJIzqLw&usqp=CAU",
    },
    {
      age: "21-30",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTe-SQMl9p9qAyfDZ31aJn4TpR4w8Ws3y4A&usqp=CAU",
    },
  ];

  const handleAge = (e) => {
    var pattern = /^\d+\.?\d*$/;
    var isNum = pattern.test(e.target.value);
    if (!isNum) {
      setisNumber(false);
      setimg("");
    } else {
      setisNumber(true);

      var age = parseInt(e.target.value);
      images.map((img) => {
        var first = parseInt(img.age.split("-")[0]);
        var second = parseInt(img.age.split("-")[1]);

        if (age >= first && age <= second) {
          setimg(img.image);
        }
      });
    }
  };

  const handleDropDown = (e) => {
    setgenderImg(e.target.value);
  };
  return (
    <div
      className="container"
      style={{
        padding: "10px",

        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        justifyContent: "space-around",
      }}
    >
      <div style={{ padding: "8px" }}>
        <div className="mb-3" style={{ width: "100%" }}>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => {
              console.log(e.target);
              setname(e.target.value);
            }}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your name"
            value={name}
          />
        </div>
        {name !== "" && (
          <>
            <div className="mb-3" style={{ width: "100%" }}>
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Age
              </label>
              <input
                onChange={(e) => handleAge(e)}
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Enter your age"
              />
              {!isNumber && (
                <p style={{ color: "tomato" }}>Please enter age in numbers</p>
              )}
            </div>
            <div
              className="mb-3"
              style={{
                width: "100%",
                display: "flex",

                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <label className="form-label">Gender</label>
                <select
                  onChange={(e) => handleDropDown(e)}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selecte> Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                {genderImg !== "" && (
                  <>
                    {genderImg === "Male" ? (
                      <BoyOutlined />
                    ) : (
                      <WomanOutlinedIcon />
                    )}
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <div>{name != "" && img != "" && <img src={img} alt="images"></img>}</div>
    </div>
  );
}
