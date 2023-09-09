import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import ButtonComponent from '../../components/ButtonComponent';


const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <TextInput
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <ButtonComponent type="submit">Sign In</ButtonComponent>
    </form>
  );
};

export default SignInForm;
