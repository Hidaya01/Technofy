import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheck, FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Videosteps from "./Videostpes";

const VideoLesson = ({ id }) => {
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/courses/${id}`)
      .then((res) => setLesson(res.data))
      .catch((err) => {
        console.error("Error fetching lesson:", err);
        setError("Failed to load lesson content.");
      });
  }, [id]);

  const convertYoutubeUrl = (url) => {
    if (!url) return "";
    if (url.includes("youtu.be")) {
      const id = url.split("/").pop();
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    return url;
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prev) => [...prev, newComment.trim()]);
      setNewComment("");
    }
  };

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!lesson) return <p>Loading...</p>;

  return (
    <div className="lesson-container" style={{ display: "flex", gap: "2rem" }}>
      {/* Left Section */}
      <div className="left-section" style={{ flex: 1 }}>
        <div className="video-box" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
          <iframe
            src={convertYoutubeUrl(lesson.youtube_url)}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          ></iframe>
        </div>

        <a href={lesson.pdf_detail} className="btn" target="_blank" rel="noopener noreferrer">
          📄 PDF
        </a>
        <a
          href={`http://localhost:8000/pdfs/${lesson.pdf_resume}`}
          className="btn"
          download
        >
          📝 Summary
        </a>

        <div className="comments-section" style={{ marginTop: "1.5rem" }}>
          <h4>
            <FaComment /> 💬 Leave a comment
          </h4>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
            rows={3}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
          />
          <button onClick={handleAddComment} className="btn">
            Post Comment
          </button>

          {comments.length > 0 && (
            <div className="comments-list" style={{ marginTop: "1rem" }}>
              <h5>📢 Comments:</h5>
              {comments.map((comment, idx) => (
                <p
                  key={idx}
                  style={{
                    background: "#f0f0f0",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    marginBottom: "0.5rem",
                  }}
                >
                  {comment}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section" style={{ flex: 1 }}>
        <button onClick={() => navigate(`/quiz/${id}`)} className="btn">
          🧠 Quiz
        </button>

        <h3 style={{ marginTop: "1rem" }}>What you will learn in this course:</h3>
        {lesson.description?.split(".").map(
          (line, i) =>
            line.trim() && (
              <p key={i}>
                <FaCheck /> {line.trim()}
              </p>
            )
        )}

        <Videosteps lessonId={id} />
      </div>
    </div>
  );
};

export default VideoLesson;
