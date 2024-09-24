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
  const [selectedStudent, setSelectedStudent] = useState<IStudentTable | null>(
    null
  );
  const [certificateType, setCertificateType] = useState<
    'highlight_certificate' | 'diploma' | ''
  >('');
  const { fetchStudents } = useStudents();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const studentsData = await fetchStudents();
        if (studentsData) {
          const studentsFormatted = studentsData.map((student: IStudentData) => ({
            id: student.id,
            name: student.full_name,
            trimester: student.graduation_term,
            hasCertificate: student.highlight_certificate_generated,
            hasDiploma: student.diploma_generated,
          }));
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
    setSelectedStudent(student);
    setCertificateType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
    setCertificateType('');
  };

  return (
    <>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2 px-4 border'>Nome</th>
            <th className='py-2 px-4 border'>Trimestre</th>
            <th className='py-2 px-4 border'>Certificado de Destaque</th>
            <th className='py-2 px-4 border'>Diploma</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td className='py-2 px-4 border'>{student.name}</td>
              <td className='py-2 px-4 border'>{student.trimester} º</td>
              <td className='py-2 px-4 border'>
                <div className='flex justify-center items-center'>
                  {student.hasCertificate ? (
                    <FaCheckCircle
                      className='text-green-500 cursor-pointer'
                      onClick={() =>
                        handleGenerateCertificate(student, 'highlight_certificate')
                      }
                    />
                  ) : (
                    <FaTimesCircle
                      className='text-red-500 cursor-pointer'
                      onClick={() =>
                        handleGenerateCertificate(student, 'highlight_certificate')
                      }
                    />
                  )}
                </div>
              </td>
              <td className='py-2 px-4 border'>
                <div className='flex justify-center items-center'>
                  {student.hasDiploma ? (
                    <FaCheckCircle
                      className='text-green-500 cursor-pointer'
                      onClick={() =>
                        handleGenerateCertificate(student, 'diploma')
                      }
                    />
                  ) : (
                    <FaTimesCircle
                      className='text-red-500 cursor-pointer'
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

      {selectedStudent && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={closeModal}
          student={selectedStudent}
          certificateType={certificateType}
        />
      )}
    </>
  );
};

export default StudentTable;
