import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/header';

const DashboardPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<any>(null);

  const { fetchUserData } = useAuth();

  return (
    <>
      <Header />
      <div className='min-h-screen bg-gray-100'>
        <div className='container mx-auto p-4'>
          <h2 className='text-2xl font-semibold mb-4'>Alunos</h2>
          {loading && <p>Carregando...</p>}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
