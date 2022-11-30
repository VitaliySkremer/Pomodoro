 import {DescriptionAddTask} from "./DescriptionAddTask/DescriptionAddTask";
import styles from "./FormCreateTask.module.scss"
import {FormAddTask} from "./FormAddTask/FormAddTask";
 import {AllTimeTasks} from "./AllTimeTasks/AllTimeTasks";

export const FormCreateTask = () => {
  return (
    <div className={styles.wrapper}>
      <DescriptionAddTask/>
      <FormAddTask/>
      <AllTimeTasks/>
    </div>
  );
}