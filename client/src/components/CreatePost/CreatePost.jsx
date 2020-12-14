import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import postValidate from '../../validation/post';
import { createPost, clearAll, fetchPostData } from '../../redux/post';
import Loader from '../Loader/Loader';

import './CreatePost.scss';

const initialValues = {
  post: '',
};

let setTimeOut;

const CreatePost = () => {
  const postState = useSelector(({ post }) => post);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: postValidate,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('image', values.image);
      formData.append('post', values.post);
      dispatch(createPost(formData));
    },
  });

  useEffect(() => {
    if (postState.success || postState.error) {
      clearTimeout(setTimeOut);
      setTimeOut = setTimeout(() => {
        dispatch(clearAll());
      }, 3000);
      formik.resetForm({ post: '', image: null });
      dispatch(fetchPostData());
    }
  }, [postState.success, postState.error]);

  return (
    <div className="content mb-4">
      {postState.success ? (
        <div className="alert alert-success" role="alert">
          Successfully Posted
        </div>
      ) : null}

      {postState.error ? (
        <div className="alert alert-error" role="alert">
          {postState.error}
        </div>
      ) : null}
      <form onSubmit={formik.handleSubmit} className="mt-4">
        <textarea
          className="form-control"
          name="post"
          placeholder="What's in your mind..."
          rows="3"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.post}
        />
        <div className="upload-btn-wrapper mt-3">
          <button type="button" className="upload-btn">
            {formik.values.image ? formik.values.image.name : 'Upload a Photo'}
          </button>
          <input
            type="file"
            name="image"
            accept=".jpg,.png"
            onChange={(event) => {
              formik.setFieldValue('image', event.currentTarget.files[0]);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formik.values.post}
        >
          POST
          {postState.loader ? <Loader /> : null}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
