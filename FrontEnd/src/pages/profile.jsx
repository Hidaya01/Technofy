import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    level: "",
    bio: "",
    avatar: "",
    joinedDate: ""
  });
  const [courses, setCourses] = useState([]);
  const [comments, setComments] = useState([]);
  const [activeTab, setActiveTab] = useState("courses");
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem("token"); // Retrieve stored auth token
            
            if (!token) {
              console.error("No token found, user is not authenticated.");
              return;
            }
      
            const response = await axios.get("http://localhost:8000/api/user", {
              headers: { Authorization: `Bearer ${token}` },
            });
      
            console.log("Fetched User Data:", response.data); // Debugging log
            setUser(response.data);

            const coursesResponse = await axios.get("http://localhost:8000/api/user/courses");
            setCourses(coursesResponse.data);
    
            // Fetch user's comments
            const commentsResponse = await axios.get("http://localhost:8000/api/user/comments");
            setComments(commentsResponse.data);
  
          
  
        // Fetch user's courses
        
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, []);
  
   
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    try {
      // Replace with actual API call
      await axios.put(`http://localhost:8000/api/users/${user.id}`, user);
      setMessage("Profile updated successfully!");
      setIsEditing(false);
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Error updating profile");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={user.avatar} alt={user.name} />
          {isEditing && (
            <div className="avatar-upload">
              <label htmlFor="avatar-upload" className="upload-button">
                Change Photo
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </div>
          )}
        </div>
        
        <div className="profile-info">
          {isEditing ? (
            <form onSubmit={handleSaveProfile}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={user.username}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="3"
                />
              </div>
              <div className="form-group">
                <select
                  name="level"
                  value={user.level}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="débutant">Débutant</option>
                  <option value="intermédiaire">Intermédiaire</option>
                  <option value="avancé">Avancé</option>
                </select>
              </div>
              <div className="form-actions">
                <button type="submit" className="button-pink">
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="button-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h1>{user.name}</h1>
              <p className="profile-email">{user.email}</p>
              <p className="profile-bio">{user.bio}</p>
              <div className="profile-meta">
                <span className="meta-item">
                  <strong>Role: </strong>Student{user.role}
                </span>
                <span className="meta-item">
                  <strong>Level:</strong>Beginner {user.level}
                </span>
                <span className="meta-item">
                  <strong>Member since:</strong> {new Date(user.joinedDate).toLocaleDateString()}
                </span>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="button-pink"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>

      {message && (
        <div className={`alert-message ${message.includes('success') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <div className="profile-content">
        <div className="profile-tabs">
          <button
            className={`tab-button ${activeTab === "courses" ? "active" : ""}`}
            onClick={() => setActiveTab("courses")}
          >
            My Courses ({courses.length})
          </button>
          <button
            className={`tab-button ${activeTab === "comments" ? "active" : ""}`}
            onClick={() => setActiveTab("comments")}
          >
            My Comments ({comments.length})
          </button>
          <button
            className={`tab-button ${activeTab === "progress" ? "active" : ""}`}
            onClick={() => setActiveTab("progress")}
          >
            Learning Progress
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "courses" && (
            <div className="courses-list">
              {courses.length > 0 ? (
                courses.map(course => (
                  <div key={course.idCourse} className="course-card">
                    <div className="course-image">
                      <img src={course.thumbnail || "/default-course.jpg"} alt={course.title} />
                    </div>
                    <div className="course-details">
                      <h3>{course.title}</h3>
                      <p className="course-description">{course.description.substring(0, 100)}...</p>
                      <div className="course-meta">
                        <span className="level-badge">{course.level}</span>
                        <span>{course.duration} hours</span>
                      </div>
                      <button className="button-pink small">
                        Continue Learning
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <p>You haven't enrolled in any courses yet.</p>
                  <Link to={"/choose-what"}><button className="button-pink">Browse Courses</button></Link>
                </div>
              )}
            </div>
          )}

          {activeTab === "comments" && (
            <div className="comments-list">
              {comments.length > 0 ? (
                comments.map(comment => (
                  <div key={comment.id} className="comment-card">
                    <div className="comment-header">
                      <span className="course-title">
                        On: {courses.find(c => c.idCourse === comment.course_id)?.title || "Unknown Course"}
                      </span>
                      <span className="comment-date">
                        {new Date(comment.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="comment-content">{comment.content}</p>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <p>You haven't posted any comments yet.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "progress" && (
            <div className="progress-container">
              <div className="progress-stats">
                <div className="stat-card">
                  <h4>Courses Completed</h4>
                  <p className="stat-value">3</p>
                </div>
                <div className="stat-card">
                  <h4>Hours Learned</h4>
                  <p className="stat-value">24</p>
                </div>
                <div className="stat-card">
                  <h4>Current Streak</h4>
                  <p className="stat-value">5 days</p>
                </div>
              </div>
              
              <div className="progress-chart">
                <h3>Your Learning Activity</h3>
                <div className="chart-placeholder">
                  {/* In a real app, you would use a charting library here */}
                  <p>Learning activity chart would display here</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;