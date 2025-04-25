import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [showCourses, setShowCourses] = useState(false);
  const [message, setMessage] = useState("");
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [showUsers, setShowUsers] = useState(false);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "étudiant",
    level: "débutant",
  });
  const [editingUserId, setEditingUserId] = useState(null);

  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    level: "",
    duration: "",
    language: "",
    type: "",
    user_id: "",
    youtube_url: "",
    pdf_detail: null,
    pdf_resume: null,
  });

  // Comments state
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState({
    content: "",
    user_id: "",
    course_id: "",
  });
  const [editingCommentId, setEditingCommentId] = useState(null);

  useEffect(() => {
    fetchCourses();
    fetchUsers();
    fetchComments();
  }, []);

  // COURSES FUNCTIONS
  const fetchCourses = () => {
    axios
      .get("http://localhost:8000/api/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    Object.keys(newCourse).forEach((key) => {
      formData.append(key, newCourse[key]);
    });
  
    if (editingCourse) {
      axios
        .post(`http://localhost:8000/api/courses/${editingCourse.idCourse}?_method=PUT`, formData)
        .then((response) => {
          setMessage("Course updated successfully");
          setShowAddCourseForm(false);
          setEditingCourse(null);
          fetchCourses();
        })
        .catch((error) => {
          console.error("Error updating course:", error);
          setMessage("Error updating course");
        });
    } else {
      axios
        .post("http://localhost:8000/api/courses", formData)
        .then((response) => {
          setMessage("Course added successfully");
          setShowAddCourseForm(false);
          fetchCourses();
        })
        .catch((error) => {
          console.error("Error adding course:", error);
          setMessage("Error adding course");
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDeleteCourse = (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
  
    axios
      .delete(`http://localhost:8000/api/courses/${id}`)
      .then((response) => {
        setMessage("Course deleted successfully");
        fetchCourses();
      })
      .catch((error) => {
        console.error("Error deleting course:", error);
        setMessage("Error deleting course");
      });
  };

  const toggleCourses = () => {
    setShowCourses(!showCourses);
  };

  // USERS FUNCTIONS
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/users");
      console.log("Users:", response.data);
      setUsers(response.data); // Ensure state updates properly
    } catch (error) {
      console.error("Error fetching users:", error.response ? error.response.data : error.message);
    }
  };
  

  const handleAddOrUpdateUser = (e) => {
    e.preventDefault();
    const api = editingUserId
      ? axios.put(`http://localhost:8000/api/users/${editingUserId}`, newUser)
      : axios.post("http://localhost:8000/api/register", newUser);
  
    api
      .then(() => {
        setNewUser({ name: "", email: "", password: "", role: "étudiant", level: "débutant" });
        setEditingUserId(null);
        fetchUsers();
      })
      .catch((err) => console.error("Error saving user:", err));
  };
  
  const handleEditUser = (user) => {
    setNewUser({ ...user, password: "" });
    setEditingUserId(user.idUser);
  };
  
  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:8000/api/users/${id}`)
      .then(() => fetchUsers())
      .catch((err) => console.error("Error deleting user:", err));
  };

  // COMMENTS FUNCTIONS
  const fetchComments = () => {
    axios
      .get("http://localhost:8000/api/comments")
      .then((res) => setComments(res.data))
      .catch((err) => console.error("Error fetching comments:", err));
  };

  const handleAddOrUpdateComment = (e) => {
    e.preventDefault();
    
    const api = editingCommentId
      ? axios.put(`http://localhost:8000/api/comments/${editingCommentId}`, newComment)
      : axios.post("http://localhost:8000/api/comments", newComment);
    
    api
      .then(() => {
        setNewComment({ content: "", user_id: "", course_id: "" });
        setEditingCommentId(null);
        fetchComments();
        setMessage(editingCommentId ? "Comment updated successfully" : "Comment added successfully");
      })
      .catch((err) => {
        console.error("Error saving comment:", err);
        setMessage("Error saving comment");
      });
  };

  const handleEditComment = (comment) => {
    setNewComment({
      content: comment.content,
      user_id: comment.user_id,
      course_id: comment.course_id
    });
    setEditingCommentId(comment.id);
  };

  const handleDeleteComment = (id) => {
    if (!window.confirm("Are you sure you want to delete this comment?")) return;

    axios
      .delete(`http://localhost:8000/api/comments/${id}`)
      .then(() => {
        setMessage("Comment deleted successfully");
        fetchComments();
      })
      .catch((err) => {
        console.error("Error deleting comment:", err);
        setMessage("Error deleting comment");
      });
  };

  return (
    <div className="admin-dashboard" style={styles.container}>
      <div style={styles.header}>
        <h1>Welcome, Admin 👋</h1>
      </div>

      <p style={styles.subtitle}>Here's a quick overview of your platform:</p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>📚 Courses</h3>
          <p>{courses.length} training programs</p>
          <button onClick={toggleCourses} style={styles.viewButton}>
            {showCourses ? "Hide Courses" : "Show Courses"}
          </button>
        </div>
        <div style={styles.card}>
          <h3>🧑‍🎓 Users</h3>
          <p>{users.length} users</p>
          <button onClick={() => setShowUsers(!showUsers)} style={styles.viewButton}>
            {showUsers ? "Hide Users" : "Show Users"}
          </button>
        </div>
        <div style={styles.card}>
          <h3>💬 Comments</h3>
          <p>{comments.length} feedbacks</p>
          <button onClick={() => setShowComments(!showComments)} style={styles.viewButton}>
            {showComments ? "Hide Comments" : "Show Comments"}
          </button>
        </div>
       
      </div>

      {/* Display message if any */}
      {message && <div style={styles.message}>{message}</div>}

      {/* COURSES SECTION */}
      {showCourses && (
        <>
          {showAddCourseForm ? (
            <form onSubmit={handleAddCourse} style={styles.form}>
              <h3>{editingCourse ? "Edit Course" : "Add New Course"}</h3>
              <div style={styles.formGroup}>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={newCourse.title}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label>Description:</label>
                <textarea
                  name="description"
                  value={newCourse.description}
                  onChange={handleInputChange}
                  required
                  style={styles.textarea}
                />
              </div>
              <div style={styles.formGroup}>
                <label>Level:</label>
                <input
                  type="text"
                  name="level"
                  value={newCourse.level}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label>Duration:</label>
                <input
                  type="number"
                  name="duration"
                  value={newCourse.duration}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label>Language:</label>
                <input
                  type="text"
                  name="language"
                  value={newCourse.language}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label>Type:</label>
                <select
                  name="type"
                  value={newCourse.type}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                >
                  <option value="">Select Type</option>
                  <option value="IDE">IDE</option>
                  <option value="PL">Programming Language</option>
                  <option value="L">Language</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label>Youtube URL (optional):</label>
                <input
                  type="url"
                  name="youtube_url"
                  value={newCourse.youtube_url}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label>PDF Detail:</label>
                <input
                  type="file"
                  name="pdf_detail"
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, pdf_detail: e.target.files[0] })
                  }
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label>PDF Resume:</label>
                <input
                  type="file"
                  name="pdf_resume"
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, pdf_resume: e.target.files[0] })
                  }
                  style={styles.input}
                />
              </div>
              <button type="submit" style={styles.submitButton}>
                {editingCourse ? "Update Course" : "Add Course"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddCourseForm(false);
                  setEditingCourse(null);
                }}
                style={styles.cancelButton}
              >
                Cancel
              </button>
            </form>
          ) : (
            <button onClick={() => setShowAddCourseForm(true)} style={styles.addButton}>
              Add New Course
            </button>
          )}

          <table style={styles.table}>
            <thead>
              <tr style={styles.tr}>
                <th>Title</th>
                <th>Description</th>
                <th>Level</th>
                <th>Duration</th>
                <th>Language</th>
                <th>Actions</th>
              </tr >
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr  key={course.idCourse}>
                  <td>{course.title}</td>
                  <td>{course.description}</td>
                  <td>{course.level}</td>
                  <td>{course.duration}</td>
                  <td>{course.language}</td>
                  <td>
                    <button
                      onClick={() => {
                        setEditingCourse(course);
                        setShowAddCourseForm(true);
                        setNewCourse({
                          ...course,
                          pdf_detail: null,
                          pdf_resume: null,
                        });
                      }}
                      style={styles.editButton}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(course.idCourse)}
                      style={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </td>
                </tr >
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* USERS SECTION */}
      {showUsers && (
        <>
          <form onSubmit={handleAddOrUpdateUser} style={styles.form}>
            <h3>{editingUserId ? "Edit User" : "Add New User"}</h3>
            <div style={styles.formGroup}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                required={!editingUserId}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label>Role:</label>
              <select
                name="role"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                style={styles.input}
              >
                <option value="étudiant">Étudiant</option>
                <option value="formateur">Formateur</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label>Level:</label>
              <input
                type="text"
                name="level"
                value={newUser.level}
                onChange={(e) => setNewUser({ ...newUser, level: e.target.value })}
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.submitButton}>
              {editingUserId ? "Update User" : "Add User"}
            </button>
            <button
              type="button"
              onClick={() => {
                setNewUser({ name: "", email: "", password: "", role: "étudiant", level: "débutant" });
                setEditingUserId(null);
              }}
              style={styles.cancelButton}
            >
              Cancel
            </button>
          </form>

          <table style={styles.table}>
            <thead>
              <tr style={styles.tr}>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Level</th>
                <th>Actions</th>
              </tr >
            </thead>
            <tbody>
              {users.map((user) => (
                <tr  key={user.idUser}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.level}</td>
                  <td>
                    <button
                      onClick={() => handleEditUser(user)}
                      style={styles.editButton}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.idUser)}
                      style={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </td>
                </tr >
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* COMMENTS SECTION */}
      {showComments && (
        <>
          <form onSubmit={handleAddOrUpdateComment} style={styles.form}>
            <h3>{editingCommentId ? "Edit Comment" : "Add New Comment"}</h3>
            <div style={styles.formGroup}>
              <label>Content:</label>
              <textarea
                name="content"
                value={newComment.content}
                onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                required
                style={styles.textarea}
              />
            </div>
            <div style={styles.formGroup}>
              <label>User ID:</label>
              <select
                name="user_id"
                value={newComment.user_id}
                onChange={(e) => setNewComment({ ...newComment, user_id: e.target.value })}
                required
                style={styles.input}
              >
                <option value="">Select User</option>
                {users.map(user => (
                  <option key={user.idUser} value={user.idUser}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>
            </div>
            <div style={styles.formGroup}>
              <label>Course ID:</label>
              <select
                name="course_id"
                value={newComment.course_id}
                onChange={(e) => setNewComment({ ...newComment, course_id: e.target.value })}
                required
                style={styles.input}
              >
                <option value="">Select Course</option>
                {courses.map(course => (
                  <option key={course.idCourse} value={course.idCourse}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" style={styles.submitButton}>
              {editingCommentId ? "Update Comment" : "Add Comment"}
            </button>
            <button
              type="button"
              onClick={() => {
                setNewComment({ content: "", user_id: "", course_id: "" });
                setEditingCommentId(null);
              }}
              style={styles.cancelButton}
            >
              Cancel
            </button>
          </form>

          <table style={styles.table}>
            <thead>
              <tr style={styles.tr}>
                <th>Content</th>
                <th>User</th>
                <th>Course</th>
                <th>Actions</th>
              </tr >
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr  key={comment.id}>
                  <td>{comment.content}</td>
                  <td>
                    {users.find(u => u.idUser === comment.user_id)?.name || comment.user_id}
                  </td>
                  <td>
                    {courses.find(c => c.idCourse === comment.course_id)?.title || comment.course_id}
                  </td>
                  <td>
                    <button
                      onClick={() => handleEditComment(comment)}
                      style={styles.editButton}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteComment(comment.id)}
                      style={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </td>
                </tr >
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitle: {
    marginTop: "1rem",
    fontSize: "1.1rem",
    color: "#555",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 0.3fr))",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  card: {
    backgroundColor: "#f5f5f5",
    color: "black",
    padding: "1rem 1.5rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  message: {
    marginTop: "1rem",
    padding: "0.75rem",
    backgroundColor: "#e3f2fd",
    color: "#0d47a1",
    borderRadius: "6px",
  },
  addButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "1rem",
  },
  viewButton: {
    backgroundColor: "#f23265",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  editButton: {
    backgroundColor: "blue",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "5px",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    marginTop: "2rem",
    borderCollapse: "collapse",
  },
  form: {
    marginTop: "1rem",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginTop: "0.3rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    backgroundColor: "white",
    color: "black"
  },
  textarea: {
    color: "black",
    width: "100%",
    padding: "0.5rem",
    marginTop: "0.3rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    height: "100px",
    backgroundColor: "white"
  },
  submitButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "1rem",
  },
  cancelButton: {
    backgroundColor: "#95a5a6",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    marginLeft: "10px",
  },
};

export default AdminDashboard;