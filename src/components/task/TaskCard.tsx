import { TaskProject } from "@/types/index";

type TaskCardProps = {
  task: TaskProject;
};

export default function TaskCard({ task }: TaskCardProps) {
  return <div>{task.name}</div>;
}
