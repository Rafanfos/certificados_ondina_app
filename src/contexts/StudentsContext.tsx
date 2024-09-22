'use client';

import { createContext, useContext, ReactNode } from 'react';
import axios from 'axios';

export interface IStudentData {
  id: string;
  full_name: string;
  graduation_term: string;
  diploma_generated: boolean;
  highlight_certificate_generated: boolean;
}

type StudentsContextData = {
  fetchStudents: () => Promise<IStudentData[]>;
  generateCertificate: (
    studentId: string,
    certificateType: string,
    director: string,
    viceDirector: string
  ) => Promise<void>;
};

type StudentsProviderProps = {
  children: ReactNode;
};

const StudentsContext = createContext<StudentsContextData>(
  {} as StudentsContextData
);

export const StudentsProvider = ({ children }: StudentsProviderProps) => {
  const fetchStudents = async (): Promise<IStudentData[]> => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;
    const contextUrl = `${baseUrl}/students`;
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get(`${contextUrl}/list/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.students;
    } catch (error) {
      console.error(error);
      throw new Error('Falha ao listar alunos');
    }
  };

  const generateCertificate = async (
    studentId: string,
    certificateType: string,
    director: string,
    viceDirector: string
  ) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;
    const contextUrl = `${baseUrl}/students`;
    const token = localStorage.getItem('token');

    const body = {
      certificate_type: certificateType,
      student_id: studentId,
      director: director,
      vice_director: viceDirector,
    };

    try {
      await axios.post(
        `${contextUrl}${studentId}/certificate`,
        { body },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Certificado gerado com sucesso!');
    } catch (error) {
      console.error('Failed to generate certificate', error);
    }
  };

  return (
    <StudentsContext.Provider value={{ fetchStudents, generateCertificate }}>
      {children}
    </StudentsContext.Provider>
  );
};

export const useStudents = () => {
  return useContext(StudentsContext);
};
