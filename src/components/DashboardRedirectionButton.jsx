import Image from 'next/image';
import Link from 'next/link';

export const DashboardRedirectionButton = () => {
  return (
    <Link className="bg-white rounded-full p-1" href="/dashboard">
        <Image src="/icons/user.svg" width={40} height={40} alt="" />
    </Link>
  );
};
