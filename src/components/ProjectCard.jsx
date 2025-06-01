import React, { useState } from "react";
import { Col, Modal } from "react-bootstrap";
import { FaGithub, FaPlay } from "react-icons/fa"; // ensure react-icons is installed

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubUrl,
  videoUrl,
}) => {
  const [show, setShow] = useState(false);

  const handleOpen = (e) => {
    // Prevent clicks on the GitHub icon from opening the modal
    if (e.target.closest(".github-icon")) return;
    setShow(true);
  };
  const handleClose = () => setShow(false);

  // If it’s a Google Drive share link, convert to “preview” URL for embedding
  const getDrivePreview = (url) => {
    try {
      // Look for the “/d/FILE_ID/” pattern in the URL
      const match = url.match(/\/d\/([^/]+)\//);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
      // Also handle “open?id=FILE_ID” style
      const paramMatch = url.match(/[?&]id=([^&]+)/);
      if (paramMatch && paramMatch[1]) {
        return `https://drive.google.com/file/d/${paramMatch[1]}/preview`;
      }
    } catch {
      // fall through
    }
    return null;
  };

  const drivePreviewUrl =
    videoUrl && videoUrl.includes("drive.google.com")
      ? getDrivePreview(videoUrl)
      : null;

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div
          className="proj-imgbx"
          style={{ position: "relative", cursor: "pointer" }}
          onClick={handleOpen}
        >
          <img src={imgUrl} alt={`${title} thumbnail`} />

          {/* Play icon overlay */}
          {videoUrl && (
            <FaPlay
              size={36}
              color="rgba(255,255,255,0.8)"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />
          )}

          {/* GitHub icon in the top-right corner */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon"
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                color: "#fff",
                background: "rgba(0,0,0,0.6)",
                borderRadius: "50%",
                padding: "6px",
                zIndex: 2,
              }}
            >
              <FaGithub size={20} />
            </a>
          )}

          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      {/* Modal for video playback */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title} – Demo</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          {videoUrl ? (
            drivePreviewUrl ? (
              <div className="ratio ratio-16x9">
                <iframe
                  src={drivePreviewUrl}
                  title={`${title} demo`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <video
                width="100%"
                controls
                autoPlay
                style={{ borderRadius: "4px" }}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <p>No demo available.</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
