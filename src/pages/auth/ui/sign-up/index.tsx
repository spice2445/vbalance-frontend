import { ByEmail } from 'features/sign-up';

import { AuthTemplate } from '../template';


export const SignUpPage = () => {
  return (
    <AuthTemplate
      title='РЕГИСТРАЦИЯ'
    >
      <ByEmail />
    </AuthTemplate>
  );
};
