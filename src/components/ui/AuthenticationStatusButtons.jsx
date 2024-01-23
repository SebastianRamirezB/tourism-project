import { LogoutButton } from '../LogoutButton';
import { LoginButton } from '../LoginButton';
import { cookies } from 'next/headers';
import { DashboardRedirectionButton } from '../DashboardRedirectionButton';

export const AuthenticationStatusButtons = ({ isThemeLight }) => {
  const cookieStore = cookies();
  const loggedUser = cookieStore.get('tourism-user');
  let userActive = false;

  if (loggedUser) {
    userActive = true;
  }
  return (
        <div>
            {
                userActive
                  ? (
                        <div className="flex justify-center items-center gap-3">
                            <LogoutButton />
                            <DashboardRedirectionButton />
                        </div>

                    )
                  : <LoginButton />

            }
        </div>
  );
};
