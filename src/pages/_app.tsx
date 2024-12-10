import '../app/globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { StudentsProvider } from '@/contexts/StudentsContext';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <StudentsProvider>
        <Component {...pageProps} />
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          pauseOnFocusLoss={false}
          draggable={false}
        />
      </StudentsProvider>
    </AuthProvider>
  );
}
