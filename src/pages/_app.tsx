import '../app/globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { StudentsProvider } from '@/contexts/StudentsContext';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <StudentsProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </StudentsProvider>
    </AuthProvider>
  );
}
