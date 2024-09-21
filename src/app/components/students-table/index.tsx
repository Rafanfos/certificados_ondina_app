type Student = {
  name: string;
  trimester: string;
  hasCertificate: boolean;
  hasDiploma: boolean;
};

type StudentTableProps = {
  students: Student[];
};

const StudentTable = ({ students }: StudentTableProps) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border">Nome</th>
          <th className="py-2 px-4 border">Trimestre</th>
          <th className="py-2 px-4 border">Certificado de Destaque</th>
          <th className="py-2 px-4 border">Diploma</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border">{student.name}</td>
            <td className="py-2 px-4 border">{student.trimester}</td>
            <td className="py-2 px-4 border">
              {student.hasCertificate ? "Sim" : "Não"}
            </td>
            <td className="py-2 px-4 border">
              {student.hasDiploma ? "Sim" : "Não"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
