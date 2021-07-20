import Button from '@components/Button';
import Input from '@components/Input';
import Head from 'next/head';
import tw from 'twin.macro';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main css={tw`grid grid-cols-1 items-center gap-y-4 md:grid-cols-2`}>
      <Head>
        <title>Contact | Nathan Nguyen</title>
      </Head>

      <section>
        <h2>Contact me</h2>
        <p css={tw`mt-4 text-sm text-gray-50 md:text-base`}>
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </p>
        <form css={tw`flex flex-col gap-3 mt-6`} onSubmit={handleSubmit}>
          <div css={tw`flex flex-col gap-3 md:flex-row`}>
            <Input
              name='name'
              placeholder='Name'
              css={tw`flex-1`}
              onChange={() => {}}
            />
            <Input
              name='email'
              type='email'
              placeholder='Email'
              css={tw`flex-1`}
              onChange={() => {}}
            />
          </div>
          <Input name='subject' placeholder='Subject' onChange={() => {}} />
          <Input
            name='message'
            placeholder='Message'
            multiline
            onChange={() => {}}
          />
          <Button label='Send message!' type='submit' css={tw`self-end`} />
        </form>
      </section>
    </main>
  );
};

export default Contact;
