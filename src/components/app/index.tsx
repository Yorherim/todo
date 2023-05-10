import { useState } from "react";
import { nanoid } from "nanoid";

import styles from "./App.module.scss";
import { ProjectsSelectMenu, Todolist } from "../";
import { Task } from "../task/types";
import { InputTextTodolistCreator } from "../input-text";
import { ProjectState, TasksFilter, tasksState, todolistsState } from "./types";
import InputText from "../input-text/Input-text";

function App() {
  const [projects, setProjects] = useState<ProjectState>([
    { id: "1", title: "project1" },
    { id: "2", title: "project2" },
  ]);
  const [currentProjectId, setCurrentProjectId] = useState<string>("1");

  const [todolists, setTodolists] = useState<todolistsState>([
    { id: "1", title: "What I need to learn", tasksFilter: "all", projectId: "1" },
    { id: "2", title: "What I need to buy", tasksFilter: "all", projectId: "1" },
    { id: "3", title: "todolist 3", tasksFilter: "all", projectId: "2" },
    { id: "4", title: "todolist 4", tasksFilter: "all", projectId: "2" },
  ]);

  const [tasks, setTasks] = useState<tasksState>([
    { id: "1", title: "HTML&CSS", isCompleted: true, todolistId: "1" },
    { id: "2", title: "React", isCompleted: false, todolistId: "1" },
    { id: "3", title: "TypeScript", isCompleted: false, todolistId: "1" },
    { id: "4", title: "milk", isCompleted: false, todolistId: "2" },
    { id: "5", title: "bread", isCompleted: false, todolistId: "2" },
    { id: "6", title: "yo", isCompleted: false, todolistId: "3" },
  ]);

  const handlersState = {
    // task
    addTask: (todolistId: string, taskTitle: string) => {
      setTasks([...tasks, { id: nanoid(), title: taskTitle, isCompleted: false, todolistId }]);
    },
    toggleCompletedTask: (todolistId: string, taskId: string) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, isCompleted: !task.isCompleted };
          }
          return task;
        }),
      );
    },

    deleteTask: (todolistId: string, taskId: string) => {
      setTasks(
        tasks.filter((task) => {
          return task.id !== taskId;
        }),
      );
    },
    changeTaskTitle: (todolistId: string, taskId: string, title: string) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, title };
          }
          return task;
        }),
      );
    },
    changeTasksFilter: (todolistId: string, filter: TasksFilter) => {
      setTasks(
        tasks.map((task) => {
          if (task.todolistId === todolistId) {
            return { ...task, filter };
          }
          return task;
        }),
      );
    },

    // todolist
    addNewTodolist: (title: string) => {
      setTodolists([
        ...todolists,
        {
          id: nanoid(),
          title,
          tasksFilter: "all",
          projectId: currentProjectId,
        },
      ]);
    },
    changeTodolistTitle: (todolistId: string, title: string) => {
      setTodolists(
        todolists.map((todolist) => {
          if (todolist.id === todolistId) {
            return { ...todolist, title };
          }
          return todolist;
        }),
      );
    },

    // projects
    selectProject: (projectId: string) => {
      setCurrentProjectId(projectId);
    },
    createNewProject: (value: string) => {
      setProjects([...projects, { id: nanoid(), title: value }]);
    },
  };

  const renders = {
    todolists: () =>
      todolists.map((todolist) => {
        if (todolist.projectId === currentProjectId) {
          let todolistTasks = [] as Task[];
          for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].todolistId === todolist.id) {
              todolistTasks.push(tasks[i]);
            }
          }

          if (todolist.tasksFilter === "active") {
            todolistTasks = todolistTasks.filter((task) => !task.isCompleted);
          } else if (todolist.tasksFilter === "completed") {
            todolistTasks = todolistTasks.filter((task) => task.isCompleted);
          }

          return (
            <Todolist
              key={todolist.id}
              todolist={todolist}
              handlersState={handlersState}
              tasks={todolistTasks}
            />
          );
        }
      }),
  };

  return (
    <main className={styles.app}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.projectBox}>
            <InputText addNewEntity={handlersState.createNewProject}>
              <div>Create new project</div>
            </InputText>
            <ProjectsSelectMenu projects={projects} selectProject={handlersState.selectProject} />
          </div>

          <InputTextTodolistCreator addNewTodolist={handlersState.addNewTodolist} />
        </div>
        <div className={styles.todolists}>{renders.todolists()}</div>
      </div>
    </main>
  );
}

export default App;
