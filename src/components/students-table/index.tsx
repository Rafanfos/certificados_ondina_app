import { IStudentData, useStudents } from '@/contexts/StudentsContext';
import { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export interface IStudentTable {
  id: string;
  name: string;
  trimester: string;
  hasCertificate: boolean;
  hasDiploma: boolean;
}

const StudentTable = () => {
  const [students, setStudents] = useState<IStudentTable[]>([]);
  const { fetchStudents, generateCertificate } = useStudents();

  useEffect(() => {
    const getStudents = async () => {
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
    };
    getStudents();
  }, []);

  return (
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
          <tr key={index}>
            <td className='py-2 px-4 border'>{student.name}</td>
            <td className='py-2 px-4 border'>{student.trimester} º</td>
            <td className='py-2 px-4 border'>
              <div className='flex justify-center items-center'>
                {student.hasCertificate ? (
                  <FaCheckCircle className='text-green-500 cursor-pointer' />
                ) : (
                  <FaTimesCircle className='text-red-500 cursor-pointer' />
                )}
              </div>
            </td>
            <td className='py-2 px-4 border'>
              <div className='flex justify-center items-center'>
                {student.hasDiploma ? (
                  <FaCheckCircle className='text-green-500 cursor-pointer' />
                ) : (
                  <FaTimesCircle className='text-red-500 cursor-pointer' />
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
