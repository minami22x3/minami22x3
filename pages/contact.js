import AnimatedText from '@components/AnimatedText';
import Button from '@components/Button';
import Input from '@components/Input';
import Toast from '@components/Toast';
import { pageVariants, rubberTextVariants } from '@variants/index';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useReducer, useState } from 'react';
import tw from 'twin.macro';
import * as yup from 'yup';

let contactSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email!')
    .required('PLease fill in all required fields!'),
  message: yup.string().required('PLease fill in all required fields!'),
});

const Contact = () => {
  const [info, setInfo] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: '', email: '', subject: '', message: '' }
  );

  const [isError, setIsError] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({});

  const handleChange = ({ target }) => {
    setInfo({ [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactSchema.validate(info);
      setIsError({});
      setToastMessage({
        type: 'success',
        title: 'Success',
        message: 'Thanks for your information!',
      });
    } catch ({ message, type, path }) {
      setIsError({
        email: (type === 'required' || type === 'email') && path === 'email',
        message: type === 'required' && path === 'message',
      });
      setToastMessage({
        type: 'danger',
        title: 'Error',
        message,
      });
    }
    setShowToast(true);
  };

  return (
    <motion.main
      className='col-2'
      variants={pageVariants}
      initial='before'
      animate='after'
      exit='exit'
    >
      <Head>
        <title>Contact | Nathan Nguyen</title>
      </Head>

      <section>
        <motion.h2
          initial='before'
          animate='after'
          variants={rubberTextVariants}
        >
          <AnimatedText content={`Contact me`} />
        </motion.h2>
        <p css={tw`text-sm text-gray-50 md:text-base`}>
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </p>
        <form css={tw`flex flex-col gap-3 mt-6`} onSubmit={handleSubmit}>
          <div css={tw`flex flex-col gap-3 md:flex-row`}>
            <Input
              name='name'
              value={info.name}
              placeholder='Name'
              css={tw`flex-1`}
              onChange={handleChange}
            />
            <Input
              name='email'
              value={info.email}
              placeholder='Email'
              error={isError.email}
              css={tw`flex-1`}
              onChange={handleChange}
            />
          </div>
          <Input
            name='subject'
            value={info.subject}
            placeholder='Subject'
            onChange={handleChange}
          />
          <Input
            name='message'
            value={info.message}
            placeholder='Message'
            multiline
            error={isError.message}
            onChange={handleChange}
          />
          <Button label='Send message!' type='submit' css={tw`self-end`} />
        </form>
      </section>
      <section></section>
      <AnimatePresence>
        {showToast && (
          <Toast
            {...toastMessage}
            autoClose={true}
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default Contact;
