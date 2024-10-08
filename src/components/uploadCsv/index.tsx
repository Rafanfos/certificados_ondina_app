import { useStudents } from '@/contexts/StudentsContext';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const UploadCSV = () => {
  const { uploadCSV } = useStudents();
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDownloadTemplate = () => {
    const csvContent = 'Nome Completo,Trimestre\n';
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'modelo_estudantes.csv');
    link.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error('Por favor, selecione um arquivo CSV.'); 
      return;
    }

    try {
      await uploadCSV(file);
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      toast.success('Arquivo CSV enviado com sucesso!'); 
    } catch (error) {
      toast.error('Erro ao enviar arquivo CSV, tente novamente.'); 
    }
  };

  return (
    <div className='bg-white p-6 rounded shadow-md'>
      <p className='mb-4'>
        Para inserir os alunos, faça upload de um arquivo CSV no formato
        correto. O modelo de CSV pode ser baixado abaixo:
      </p>
      <button
        onClick={handleDownloadTemplate}
        className='bg-green-500 text-white py-2 px-4 rounded mb-4'
      >
        Baixar modelo CSV
      </button>
      <input
        type='file'
        accept='.csv'
        onChange={handleFileChange}
        ref={fileInputRef}
        className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 mb-4'
      />
      <button
        onClick={handleUpload}
        className='bg-blue-500 text-white py-2 px-4 rounded'
      >
        Enviar CSV
      </button>
    </div>
  );
};

export default UploadCSV;
