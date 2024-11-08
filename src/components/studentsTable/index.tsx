import { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { IStudentData, useStudents } from '@/contexts/StudentsContext';
import CertificateModal from '../certificateModal';
import { toast } from 'react-toastify';

export interface IStudentTable {
  id: string;
  name: string;
  trimester: string;
  hasCertificate: boolean;
  hasDiploma: boolean;
}

const StudentTable = () => {
  const [students, setStudents] = useState<IStudentTable[]>([]);
  const [selectedStudents, setSelectedStudents] = useState<IStudentTable[]>([]);
  const [certificateType, setCertificateType] = useState<
    'highlight_certificate' | 'diploma' | ''
  >('');
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const { fetchStudents } = useStudents();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBatchGeneration, setIsBatchGeneration] = useState(false);
  const [chosenStudent, setChosenStudent] = useState<IStudentTable | null>(null);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const studentsData = await fetchStudents();
        if (studentsData) {
          const studentsFormatted = studentsData.map(
            (student: IStudentData) => ({
              id: student.id,
              name: student.full_name,
              trimester: student.graduation_term,
              hasCertificate: student.highlight_certificate_generated,
              hasDiploma: student.diploma_generated,
            })
          );
          setStudents(studentsFormatted);
        }
      } catch (error) {
        toast.error('Erro ao carregar os dados dos alunos.');
        console.error(error);
      }
    };
    getStudents();
  }, [fetchStudents]);

  const handleGenerateCertificate = (
    student: IStudentTable,
    type: 'highlight_certificate' | 'diploma'
  ) => {
    setChosenStudent(student); // Para geração individual
    setCertificateType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudents([]);
    setChosenStudent(null);
    setCertificateType('');
    setIsBatchGeneration(false); // Reseta o estado de geração em massa
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handleGenerateSelected = (
    type: 'highlight_certificate' | 'diploma'
  ) => {
    // Limpa a lista de estudantes selecionados
    const studentsToGenerate = students.filter(
      (student) => selectedItems[student.id]
    );
    setSelectedStudents(studentsToGenerate); // Armazena os alunos selecionados
    setCertificateType(type);
    setIsModalOpen(true);
    setIsBatchGeneration(true); // Marca que estamos gerando em massa
  };

  // Verifica se pelo menos um checkbox foi marcado
  const hasSelectedItems = Object.values(selectedItems).some(
    (checked) => checked
  );

  return (
    <>
      {hasSelectedItems && (
        <div className='mt-4'>
          <button
            className='mr-2 p-2 bg-blue-500 text-white'
            onClick={() => handleGenerateSelected('highlight_certificate')}
          >
            Gerar Certificados
          </button>
          <button
            className='p-2 bg-green-500 text-white'
            onClick={() => handleGenerateSelected('diploma')}
          >
            Gerar Diplomas
          </button>
        </div>
      )}
      <table className='min-w-full bg-transparent'>
        <thead>
          <tr>
            <th className='py-2 px-4'></th>
            <th className='py-2 px-4 border bg-white'>Nome</th>
            <th className='py-2 px-4 border bg-white'>Trimestre</th>
            <th className='py-2 px-4 border bg-white'>
              Certificado de Destaque
            </th>
            <th className='py-2 px-4 border bg-white'>Diploma</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className='py-2 px-4 bg-transparent text-center'>
                <input
                  type='checkbox'
                  checked={!!selectedItems[student.id]}
                  onChange={(e) =>
                    handleCheckboxChange(student.id, e.target.checked)
                  }
                />
              </td>
              <td className='py-2 px-4 border bg-white'>{student.name}</td>
              <td className='py-2 px-4 border bg-white'>
                {student.trimester} º
              </td>
              <td className='py-2 px-4 border bg-white'>
                <div className='flex justify-center items-center'>
                  {student.hasCertificate ? (
                    <FaCheckCircle
                      className='text-green-500 cursor-pointer'
                      onClick={() =>
                        handleGenerateCertificate(
                          student,
                          'highlight_certificate'
                        )
                      }
                    />
                  ) : (
                    <FaTimesCircle
                      className='text-red-500 cursor-pointer'
                      onClick={() =>
                        handleGenerateCertificate(
                          student,
                          'highlight_certificate'
                        )
                      }
                    />
                  )}
                </div>
              </td>
              <td className='py-2 px-4 border bg-white'>
                <div className='flex justify-center items-center cursor-pointer'>
                  {student.hasDiploma ? (
                    <FaCheckCircle
                      className='text-green-500 cursor-pointer'
                      onClick={() =>
                        handleGenerateCertificate(student, 'diploma')
                      }
                    />
                  ) : (
                    <FaTimesCircle
                      className='text-red-500'
                      onClick={() =>
                        handleGenerateCertificate(student, 'diploma')
                      }
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={closeModal}
          students={selectedStudents} // Passa a lista de estudantes selecionados
          certificateType={certificateType}
          isBatch={isBatchGeneration}
          student={chosenStudent} // Passa a informação se a geração é em massa
        />
      )}
    </>
  );
};

export default StudentTable;
