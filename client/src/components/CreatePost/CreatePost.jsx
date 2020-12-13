import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import postValidate from '../../validation/post';
import { createPost } from '../../redux/post';

import './CreatePost.scss';

const initialValues = {
  post: '',
};

const CreatePost = () => {
  // const postState = useSelector(({ post }) => post);

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

  return (
    <div className="content mb-4">
      <form onSubmit={formik.handleSubmit}>
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
        <button type="submit" className="btn btn-primary" disabled={!formik.values.post}>
          POST
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
