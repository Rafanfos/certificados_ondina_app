import { useAuth } from '@/contexts/AuthContext';
import { routeModule } from 'next/dist/build/templates/app-page';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

interface IUserData {
  firstName: string;
  lastName: string;
}

const Header = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<IUserData | null>(null);

  const { fetchUserData } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      console.log('Buscando dados do usuário...');
      setLoading(true);
      try {
        const data = await fetchUserData();
        const { first_name, last_name } = data;
        setUserData({ firstName: first_name, lastName: last_name });
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchUserData]);

  const handleLogout = async () => {
    try {
      localStorage.removeItem('token'); 
      toast.success('Logout realizado com sucesso!'); 
      router.push('/');

    } catch (error) {
      console.error('Erro ao realizar logout:', error);
      toast.error('Erro ao realizar logout, tente novamente.'); 
    }
  };

  return (
    <header className='bg-blue-600 text-white p-4 flex justify-between items-center'>
      <div className='text-center'>
        {userData && (
          <>
            <h1 className='text-2xl'>
              Bem-vindo, {userData.firstName} {userData.lastName}!
            </h1>
            <p className='text-sm'>Estamos felizes em tê-lo de volta.</p>
          </>
        )}
      </div>
      <button
        onClick={handleLogout}
        className='bg-red-500 text-white py-1 px-3 rounded'
      >
        Sair
      </button>
    </header>
  );
};

export default Header;
