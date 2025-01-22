import { getProjectById } from "@/api/ProjectAPI";
import EditProjectForm from "@/components/projects/EditProjectForm";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";

export default function EditProjectView() {
  const params = useParams();
  const projectId = params.projectId!;

  const { data, isError, isLoading } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
    retry: false,
  });

  console.log(data);
  if (isError) return <Navigate to={"/404"} />;
  if (isLoading) return "Cargando....";

  if (data) return <EditProjectForm data={data} projectId={projectId} />;
}
