import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/header';
import StudentsTable from '@/components/students-table';

const DashboardPage = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-gray-100'>
        <div className='container mx-auto p-4'>
          <h2 className='text-2xl font-semibold mb-4'>Alunos</h2>
          <StudentsTable />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
