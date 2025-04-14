import React, { useState, useEffect, useContext } from "react";

import { ImageList, ImageListItem, Typography } from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";

import models from "../../modelData/models.js";

import Photo from "./Photo.jsx";
import { CurrentViewContext } from "../../contexts/CurrentViewContext.js";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const { setCurrentView } = useContext(CurrentViewContext);

  const user = useParams();
  const userId = user.userId;
  const userDetail = models.userModel(userId);
  const allPhotos = models.photoOfUserModel(userId);

  useEffect(() => {
    // change TopBar to display view name
    setCurrentView(`Photos of  ${userDetail.first_name} ${userDetail.last_name}`)
    // function definition
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    }
    //
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }

  }, []);

  return (
    <>
      <ImageList cols={3} gap={8}>
        {allPhotos.map(photo =>
          <ImageListItem key={photo._id} onClick={() => setSelectedPhoto(photo)}>
            <img src={`/images/${photo.file_name}`} alt="A photo" />
          </ImageListItem>
        )}
      </ImageList>
      {selectedPhoto && (
        <div class="photo-div">
          <button className="closeButton" onClick={() => setSelectedPhoto(null)}>
            &#x2715;
          </button>
          <Photo
            photoData={selectedPhoto}
          />
          
        </div>)}
    </>
  );
}

export default UserPhotos;
