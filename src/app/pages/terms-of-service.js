import { Button } from '@material-ui/core';
import Link from 'next/link';

export const TermsOfService = () => {
  return (
    <>
      Terms Of Service
      <Link href={'/'}>
        <Button>Home</Button>
      </Link>
    </>
  );
};

export default TermsOfService;
