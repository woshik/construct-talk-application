import * as Yup from 'yup';

const postValidate = Yup.object({
  post: Yup.string().required(),
});

export default postValidate;
