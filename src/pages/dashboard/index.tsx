import { useState } from 'react';
import Header from '@/components/header';
import NavBar from '@/components/navBar';
import StudentsTable from '@/components/studentsTable';
import UploadCSV from '@/components/uploadCsv';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'upload'>('students');

  return (
    <>
      <Header />
      <div className='min-h-screen bg-gray-100'>
        <div className='container mx-auto p-4 flex flex-col gap-5'>
          <NavBar activeTab={activeTab} onTabChange={setActiveTab} />

          <h2 className='text-2xl font-semibold'>
            {activeTab === 'students' ? 'Alunos' : 'Upload CSV de Estudantes'}
          </h2>

          {activeTab === 'students' ? <StudentsTable/> : <UploadCSV />}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
