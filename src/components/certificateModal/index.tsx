import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useStudents } from "@/contexts/StudentsContext";
import { toast } from "react-toastify";
import { IStudentTable } from "../studentsTable";
import JSZip from "jszip";
import FileSaver from "file-saver";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  director: Yup.string().required("Diretor é obrigatório"),
  viceDirector: Yup.string().when("certificateType", {
    is: (type: string) => type === "highlight_certificate",
    then: (schema: { required: (arg0: string) => any }) =>
      schema.required("Vice-Diretor é obrigatório"),
    otherwise: (schema: { optional: () => any }) => schema.optional(),
  }),
  year: Yup.string().required("Ano é obrigatório"),
});

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  student?: IStudentTable | null;
  students?: IStudentTable[];
  certificateType: string;
  isBatch?: boolean;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  student,
  students,
  certificateType,
  isBatch = false, // Default para false
}) => {
  const { generateCertificate } = useStudents();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    const { director, viceDirector, year } = data;

    setIsLoading(true);

    try {
      if (isBatch && students) {
        const zip = new JSZip();

        for (const student of students) {
          const pdfBlob = await generateCertificate(
            student.id,
            certificateType,
            director,
            viceDirector,
            year
          );
          zip.file(`${student.name}_${certificateType}.pdf`, pdfBlob);
        }

        const zipBlob = await zip.generateAsync({ type: "blob" });
        FileSaver.saveAs(zipBlob, "certificados.zip");

        for (const student of students) {
          handleUpdateCertificate(student);
        }

        toast.success("Certificados gerados com sucesso!");
      } else if (student) {
        const pdfBlob = await generateCertificate(
          student.id,
          certificateType,
          director,
          viceDirector,
          year
        );
        downloadPdf(pdfBlob);

        handleUpdateCertificate(student);

        toast.success("Certificado gerado com sucesso!");
      }

      setIsLoading(false);
      onClose();
    } catch (error) {
      setIsLoading(false);
      toast.error("Erro ao gerar ou baixar certificados, tente novamente.");
    }
  };

  const downloadPdf = (response: Blob) => {
    const url = window.URL.createObjectURL(response);
    const link = document.createElement("a");
    const generatedDate = new Date().toISOString();
    link.href = url;
    link.setAttribute(
      "download",
      `${student?.name}_${certificateType}_${generatedDate}.pdf`
    );
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleUpdateCertificate = (currentStudent: IStudentTable) => {
    if (certificateType === "highlight_certificate") {
      currentStudent.hasCertificate = true;
    } else if (certificateType === "diploma") {
      currentStudent.hasDiploma = true;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10 px-6">
            <FaSpinner className="animate-spin text-blue-500 text-4xl mb-4" />
            <p className="text-lg text-gray-700">
              Gerando certificado, aguarde...
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-xl mb-4">
              Gerar{" "}
              {certificateType === "highlight_certificate"
                ? "Certificados de Destaque"
                : "Diplomas"}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700">Diretor:</label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded ${
                    errors.director ? "border-red-500" : ""
                  }`}
                  {...register("director")}
                  disabled={isLoading}
                />
                {errors.director && (
                  <p className="text-red-500 text-sm">
                    {errors.director.message}
                  </p>
                )}
              </div>
              {certificateType === "highlight_certificate" && (
                <div className="mb-4">
                  <label className="block text-gray-700">Vice-Diretor:</label>
                  <input
                    type="text"
                    className={`w-full px-3 py-2 border rounded ${
                      errors.viceDirector ? "border-red-500" : ""
                    }`}
                    {...register("viceDirector")}
                    disabled={isLoading}
                  />
                  {errors.viceDirector && (
                    <p className="text-red-500 text-sm">
                      {errors.viceDirector.message}
                    </p>
                  )}
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700">Ano:</label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded ${
                    errors.year ? "border-red-500" : ""
                  }`}
                  {...register("year")}
                  disabled={isLoading}
                />
                {errors.year && (
                  <p className="text-red-500 text-sm">{errors.year.message}</p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <FaSpinner className="animate-spin mr-2" />
                      Processando...
                    </span>
                  ) : (
                    `Gerar ${isBatch ? "Certificados" : "Certificado"}`
                  )}
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={onClose}
                  disabled={isLoading}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CertificateModal;
