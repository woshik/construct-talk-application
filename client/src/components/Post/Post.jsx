/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostData } from '../../redux/post';

const Post = () => {
  const postState = useSelector(({ post }) => post);
  const user = useSelector(({ auth }) => auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostData());
  }, []);

  return (
    <>
      {postState.posts?.length !== 0 ? postState.posts.map((post) => (
        <div className="card mb-5" key={post._id}>
          <div className="card-header mb-3">
            <div className="card">
              <div className="row no-gutters">
                <div className="profile-picture-wrapper d-flex align-items-start">
                  <img
                    src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                    alt="avatar"
                    className="card-img profile-picture"
                  />
                </div>
                <div className="col-10 d-flex align-items-center">
                  <div className="card-body status">
                    <p>
                      <b className="mr-2">{user.firstName}</b>
                      {post.image ? 'Added a photo' : ''}
                    </p>
                    <p>{post.post}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <img
              src={post.image}
              alt={post.post}
            />
          </div>
        </div>
      )) : (
        <h2 className="text-center">Make Some Connection First</h2>
      )}
    </>
  );
};

export default Post;
