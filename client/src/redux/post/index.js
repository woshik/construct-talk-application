import axiosInstance from '../../helper/axios';

const POST_REQUEST_SENT = 'POST_REQUEST_SENT';
const POST_REQUEST_COMPLETE = 'POST_REQUEST_COMPLETE';
const POST_SUCCESS = 'POST_SUCCESS';
const POST_FAILURE = 'POST_FAILURE';
const CLEAR_ERROR = 'CLEAR_ERROR';
const CLEAR_ALL = 'CLEAR_ALL';

const initialState = {
  success: false,
  loader: false,
  error: null,
};

const POSTReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_REQUEST_SENT:
      return {
        ...state,
        loader: true,
      };
    case POST_REQUEST_COMPLETE:
      return {
        ...state,
        loader: false,
      };
    case POST_SUCCESS:
      return {
        ...state,
        success: true,
        error: null,
      };
    case POST_FAILURE:
      return {
        ...state,
        success: false,
        error: payload?.error,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case CLEAR_ALL:
      return {
        success: false,
        loader: false,
        error: null,
      };
    default:
      return state;
  }
};

export const createPost = (userData) => {
  function requestSent() {
    return {
      type: POST_REQUEST_SENT,
    };
  }

  function requestComplete() {
    return {
      type: POST_REQUEST_COMPLETE,
    };
  }

  function success() {
    return {
      type: POST_SUCCESS,
    };
  }

  function failure(error) {
    return {
      type: POST_FAILURE,
      payload: { error },
    };
  }

  return (dispatch) => {
    console.log(userData);
    dispatch(requestSent());
    axiosInstance
      .post('post', userData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        dispatch(success());
      })
      .catch((error) => {
        dispatch(failure(error?.response?.data?.message || 'Server Error'));
      })
      .then(() => {
        dispatch(requestComplete());
      });
  };
};

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const clearAll = () => ({
  type: CLEAR_ALL,
});

export default POSTReducer;
