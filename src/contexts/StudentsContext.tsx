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
  ) => Promise<Blob>;
  uploadCSV: (file: File) => Promise<void>;
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
  ): Promise<Blob> => {
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
      const response = await axios.post(`${contextUrl}/generate-pdf/`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob', 
      });

      return response.data;
      } catch (error) {
      console.error('Failed to generate certificate', error);
      throw error;
    }
  };

  const uploadCSV = async (file: File): Promise<void> => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;
    const contextUrl = `${baseUrl}/students`;
    const token = localStorage.getItem('token');
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      await axios.post(`${contextUrl}/register/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.error('Failed to upload CSV', error);
      throw new Error('Falha ao enviar arquivo CSV');
    }
  };
  

  return (
    <StudentsContext.Provider value={{ fetchStudents, generateCertificate, uploadCSV }}>
      {children}
    </StudentsContext.Provider>
  );
};

export const useStudents = () => {
  return useContext(StudentsContext);
};
