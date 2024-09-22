import { useAuth } from '@/contexts/AuthContext';
import { useState, useEffect } from 'react';

const Header = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<any>(null);

  const { fetchUserData } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <header className='bg-blue-600 text-white p-4 text-center'>
      <h1 className='text-2xl'>Bem-vindo, {userData.firstName} {userData.lastName}!</h1>
      <p className='text-sm'>Estamos felizes em tê-lo de volta.</p>
    </header>
  );
};

export default Header;
