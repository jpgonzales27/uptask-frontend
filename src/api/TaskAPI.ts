import { isAxiosError } from "axios";
import { Project, TaskFormData } from "../types";
import api from "@/lib/axios";

type TaskAPI = {
  formData: TaskFormData;
  projectId: Project["_id"];
};

export async function createTask({ formData, projectId }: Pick<TaskAPI, "formData" | "projectId">) {
  console.log(formData, projectId);
  try {
    const url = `/projects/${projectId}/tasks`;
    const { data } = await api.post<string>(url, formData);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
      throw new Error(error.response?.data.error);
    }
  }
}
