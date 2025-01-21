import api from "@/lib/axios";
import { ProjectFormData } from "@/types/index";

export async function createProject(formData: ProjectFormData) {
  console.log(formData);
  try {
    const { data } = await api.post("/projects", formData);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
