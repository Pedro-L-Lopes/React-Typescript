// interfaces
import { ITask } from "../interfaces/ITask";

import { BsPencil, BsTrash } from "react-icons/bs";
import styles from "./TaskList.module.css";

interface Props {
  taskList: ITask[];
  handleDelete(title: string): void;
  handleEdit(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <div key={index} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <div
                className={`${styles.difficultyBar} ${
                  styles[`d${task.difficulty}`]
                }`}
              ></div>
            </div>
            <div className={styles.actions}>
              <i onClick={() => handleEdit(task)}>
                <BsPencil />
              </i>
              <i onClick={() => handleDelete(task.title)}>
                <BsTrash />
              </i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
