import { Navbar } from '@/components/navbar/Navbar';

export default function DashboardLayout ({ children }) {
  return (
        <div>
            <Navbar isThemeLight />
            <div>
                {children}
            </div>
        </div>
  );
}
