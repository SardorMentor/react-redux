import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { nanoid } from "nanoid";

import Comment from "../../components/Comment/Comment";
import "./comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const movieId = useSelector((state) => state.movie.movieId);
  console.log(movieId);

  const url = `https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/movies/${movieId}/comments`;

  const getComments = () => {
    axios
      .get(url)
      .then((response) => setComments(response.data))
      .catch((error) => console.log("error ", error));
  };

  useEffect(() => {
    getComments();
  }, [url]);

  const initialValues = {
    username: "",
    comment_msg: "",
  };

  const [values, setValues] = useState(initialValues);

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      username: values.username,
      comment_msg: values.comment_msg,
    };

    axios.post(url, formData).then((response) => {
      getComments();
      setValues(initialValues);
    });
  };

  return (
    <div className="comments">
      <h2 className="comments__title">Comments</h2>
      <div className="comments__items">
        {!comments.length && "Click the movie to see comment(s)." }
        {comments.map((comment) => (
          <Comment
            key={nanoid()}
            title={comment.username}
            text={comment.comment_msg}
          />
        ))}
      </div>
      <form className="comments__footer" onSubmit={submitHandler}>
        <input
          value={values.username}
          onChange={onChange}
          type="text"
          placeholder="Username"
          name="username"
        />
        <textarea
          value={values.comment_msg}
          onChange={onChange}
          placeholder="Comment..."
          name="comment_msg"
        ></textarea>
        <button>POST</button>
      </form>
    </div>
  );
};

export default Comments;
