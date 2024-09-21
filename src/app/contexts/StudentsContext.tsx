import { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";

type Student = {
  name: string;
  trimester: string;
  hasCertificate: boolean;
  hasDiploma: boolean;
};

type StudentsContextData = {
  students: Student[];
  fetchStudents: () => Promise<void>;
  generateCertificate: (studentId: string) => Promise<void>;
};

type StudentsProviderProps = {
  children: ReactNode;
};

const StudentsContext = createContext<StudentsContextData>(
  {} as StudentsContextData
);

export const StudentsProvider = ({ children }: StudentsProviderProps) => {
  const [students, setStudents] = useState<Student[]>([]);

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/api/students", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudents(response.data);
    } catch (error) {
      console.error("Failed to fetch students", error);
    }
  };

  const generateCertificate = async (studentId: string) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:8000/api/students/${studentId}/certificate`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Certificado gerado com sucesso!");
    } catch (error) {
      console.error("Failed to generate certificate", error);
    }
  };

  return (
    <StudentsContext.Provider
      value={{ students, fetchStudents, generateCertificate }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export const useStudents = () => {
  return useContext(StudentsContext);
};
