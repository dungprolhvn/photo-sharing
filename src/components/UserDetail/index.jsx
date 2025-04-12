import React from "react";
import { Button, Card, Typography} from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";

import models from "../../modelData/models.js";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const user = useParams();
    const userId = user.userId;
    const userDetail = models.userModel(userId);
    return (
        <Card>
          <Typography variant="h3">
          {userDetail.first_name} {userDetail.last_name}, {['o', 'a', 'i', 'e'].includes(userDetail.occupation.charAt(0).toLowerCase()) ? "an" : "a"} {userDetail.occupation}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Lives in {userDetail.location}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {userDetail.description}
          </Typography>
        <Link to={`/photos/${userDetail._id}`}>
          <Button variant="contained" color="primary">
            View all photos
          </Button>
          </Link>
        </Card>
    );
}

export default UserDetail;
