import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Divider } from "@mui/material";

import "./styles.css";

const Photo = ({ photoData }) => {
    const comments = Array.isArray(photoData.comments) ? photoData.comments : [];
    return (
        <Card style={{ maxWidth: 600, margin: "20px auto" }}>
            {/* Photo Date Section */}
            <CardContent>
                <Typography variant="body2" color="textSecondary" style={{ marginBottom: "10px" }}>
                    {photoData.date_time}
                </Typography>
            </CardContent>

            {/* Photo Section */}
            <img
                src={`/images/${photoData.file_name}`}
                style={{ width: "100%", objectFit: "cover" }}
            />

            {/* Comments Section */}
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Comments
                </Typography>
                <Divider style={{ marginBottom: "10px" }} />
                <div style={{ maxHeight: "300px", overflow: "auto" }}>
                    {comments.map((comment) => (
                        <div key={comment._id} style={{ marginBottom: "10px" }}>
                            <Link to={`/users/${comment.user._id}`}>
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    {comment.user.first_name} {comment.user.last_name}
                                </Typography>
                            </Link>
                            <Typography variant="body2" color="textSecondary">
                                {comment.date_time}
                            </Typography>
                            <Typography variant="body1">{comment.comment}</Typography>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default Photo;