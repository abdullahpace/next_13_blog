import './globals.css';
import { Inter } from 'next/font/google';
import styles from './layout.module.css';
import utilStyles from './utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <Link href={'/'}>
              <Image
                priority
                src='/images/profile.jpg'
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=''
              />
            </Link>
            <h2 className={styles.heading2Xl}>Your Name</h2>
            {children}
          </header>
        </div>
      </body>
    </html>
  );
}
