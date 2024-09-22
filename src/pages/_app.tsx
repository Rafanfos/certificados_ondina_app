import '../app/globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { StudentsProvider } from '@/contexts/StudentsContext';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <StudentsProvider>
        <Component {...pageProps} />
      </StudentsProvider>
    </AuthProvider>
  );
}
