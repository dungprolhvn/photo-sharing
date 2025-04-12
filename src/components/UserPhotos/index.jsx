import React, { useState, useEffect } from "react";

import { ImageList, ImageListItem, Typography } from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";

import models from "../../modelData/models.js";

import Photo from "./Photo.jsx";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
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

  const user = useParams();
  const userId = user.userId;
  const allPhotos = models.photoOfUserModel(userId);
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
          <Photo
            photoData={selectedPhoto}
          />
        </div>)}
    </>
  );
}

export default UserPhotos;
