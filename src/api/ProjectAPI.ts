import api from "@/lib/axios";
import { dashboardProjectSchema, ProjectFormData } from "@/types/index";
import { isAxiosError } from "axios";

export async function createProject(formData: ProjectFormData) {
  console.log(formData);
  try {
    const { data } = await api.post("/projects", formData);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data.error);
      throw new Error(error.response.data.error);
    }
  }
}

export async function getProjects() {
  try {
    const { data } = await api("/projects");
    console.log(data);
    const response = dashboardProjectSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data.error);
      throw new Error(error.response.data.error);
    }
  }
}
