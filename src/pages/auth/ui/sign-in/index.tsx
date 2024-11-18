import { ByEmail } from 'features/sign-in';

import { AuthTemplate } from '../template';


export const SignInPage = () => {
  return (
    <AuthTemplate
      title='ВОЙТИ'
    >
      <ByEmail />
    </AuthTemplate>
  );
};
