import { Navbar } from '@/components/navbar/Navbar';

export default function DashboardLayout ({ children }) {
  return (
        <>
            <Navbar isThemeLight />
            <div>
                {children}
            </div>
        </>
  );
}
