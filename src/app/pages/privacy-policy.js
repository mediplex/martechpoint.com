import { Button } from '@material-ui/core'
import Link from 'next/link'

export const PrivacyPolicy = () => {
  return (
    <>
      privacy policy
      <Link href={'/'}>
        <Button>Home</Button>
      </Link>
    </>
  );
}

export default PrivacyPolicy