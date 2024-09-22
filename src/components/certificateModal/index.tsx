import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useStudents } from '@/contexts/StudentsContext';
import { toast } from 'react-toastify';

// Definindo o schema de validação com Yup
const validationSchema = Yup.object().shape({
  director: Yup.string().required('Diretor é obrigatório'),
  viceDirector: Yup.string().required('Vice-Diretor é obrigatório'),
  year: Yup.string().required('Ano é obrigatório'),
});

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentId: string;
  certificateType: string;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  studentId,
  certificateType,
}) => {
  const { generateCertificate } = useStudents();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    const { director, viceDirector, year } = data; // Isolando os dados
  
    try {
      const pdfBlob = await generateCertificate(studentId, certificateType, director, viceDirector, year);
      downloadPdf(pdfBlob); 
      toast.success('Certificado gerado com sucesso!'); 
      onClose();
    } catch (error) {
      toast.error('Erro ao gerar ou baixar certificado, tente novamente.'); 
    }
  };
  
  const downloadPdf = (response: Blob) => {
    const url = window.URL.createObjectURL(response);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'certificado.pdf'); 
    document.body.appendChild(link);
    link.click(); 
    link.remove(); 
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded shadow-lg'>
        <h2 className='text-xl mb-4'>
          Gerar{' '}
          {certificateType === 'highlight_certificate'
            ? 'Certificado de Destaque'
            : 'Diploma'}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block text-gray-700'>Diretor:</label>
            <input
              type='text'
              className={`w-full px-3 py-2 border rounded ${
                errors.director ? 'border-red-500' : ''
              }`}
              {...register('director')}
            />
            {errors.director && (
              <p className='text-red-500 text-sm'>{errors.director.message}</p>
            )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700'>Vice-Diretor:</label>
            <input
              type='text'
              className={`w-full px-3 py-2 border rounded ${
                errors.viceDirector ? 'border-red-500' : ''
              }`}
              {...register('viceDirector')}
            />
            {errors.viceDirector && (
              <p className='text-red-500 text-sm'>
                {errors.viceDirector.message}
              </p>
            )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700'>Ano:</label>
            <input
              type='text'
              className={`w-full px-3 py-2 border rounded ${
                errors.year ? 'border-red-500' : ''
              }`}
              {...register('year')}
            />
            {errors.year && (
              <p className='text-red-500 text-sm'>{errors.year.message}</p>
            )}
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
            >
              Gerar Certificado
            </button>
            <button
              type='button'
              className='bg-gray-500 text-white px-4 py-2 rounded'
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CertificateModal;
