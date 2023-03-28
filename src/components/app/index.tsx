import { ChangeEvent, useState } from "react";
import { nanoid } from "nanoid";

import styles from "./App.module.scss";
import { ProjectsSelectMenu, Todolist } from "../";
import { Task } from "../task/types";
import { InputTextTodolistCreator } from "../input-text";
import { TasksFilter, tasksState, todolistsState } from "./types";
import InputText from "../input-text/Input-text";

function App() {
  const [projects, setProjects] = useState([
    { id: "1", title: "project1" },
    { id: "2", title: "project2" },
  ]);
  const [currentProjectId, setCurrentProjectId] = useState<string>("1");

  const [allTodolists, setAllTodolists] = useState<todolistsState>([
    {
      projectId: "1",
      todolists: [
        { id: "1", title: "What I need to learn", tasksFilter: "all" },
        { id: "2", title: "What I need to buy", tasksFilter: "all" },
      ],
    },
    {
      projectId: "2",
      todolists: [
        { id: "3", title: "todolist 3", tasksFilter: "all" },
        { id: "4", title: "todolist 4", tasksFilter: "all" },
      ],
    },
  ]);

  const [allTasks, setAllTasks] = useState<tasksState>([
    {
      todolistId: "1",
      tasks: [
        { id: "1", title: "HTML&CSS", isCompleted: true },
        { id: "2", title: "React", isCompleted: false },
        { id: "3", title: "TypeScript", isCompleted: false },
      ],
    },
    {
      todolistId: "2",
      tasks: [
        { id: "4", title: "milk", isCompleted: false },
        { id: "5", title: "bread", isCompleted: false },
      ],
    },
  ]);

  const handlersState = {
    // task
    addTask: (todolistId: string, taskTitle: string) => {
      setAllTasks(
        allTasks.map((tasksGroup) => {
          if (tasksGroup.todolistId === todolistId) {
            return {
              ...tasksGroup,
              tasks: [...tasksGroup.tasks, { id: nanoid(), title: taskTitle, isCompleted: false }],
            };
          }
          return tasksGroup;
        }),
      );
    },
    toggleCompletedTask: (todolistId: string, taskId: string) => {
      setAllTasks(
        allTasks.map((tasksGroup) => {
          if (tasksGroup.todolistId === todolistId) {
            tasksGroup.tasks = tasksGroup.tasks.map((task) => {
              if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
              }
              return task;
            });
          }
          return tasksGroup;
        }),
      );
    },
    changeTasksFilter: (todolistId: string, filter: TasksFilter) => {
      setAllTodolists(
        allTodolists.map((todolistGroup) => {
          if (todolistGroup.projectId === currentProjectId) {
            return {
              ...todolistGroup,
              todolists: todolistGroup.todolists.map((todolist) => {
                if (todolist.id === todolistId) {
                  return { ...todolist, tasksFilter: filter };
                }
                return todolist;
              }),
            };
          }
          return todolistGroup;
        }),
      );
    },
    deleteTask: (todolistId: string, taskId: string) => {
      setAllTasks(
        allTasks.map((tasksGroup) => {
          if (tasksGroup.todolistId === todolistId) {
            return {
              ...tasksGroup,
              tasks: tasksGroup.tasks.filter((task) => task.id !== taskId),
            };
          }
          return tasksGroup;
        }),
      );
    },
    changeTaskTitle: (todolistId: string, taskId: string, title: string) => {
      setAllTasks(
        allTasks.map((tasksGroup) => {
          if (tasksGroup.todolistId === todolistId) {
            return {
              ...tasksGroup,
              tasks: tasksGroup.tasks.map((task) => {
                if (task.id === taskId) task.title = title;
                return task;
              }),
            };
          }
          return tasksGroup;
        }),
      );
    },

    // todolist
    addNewTodolist: (title: string) => {
      const newTodolistId = nanoid();
      setAllTodolists([
        ...allTodolists,
        {
          projectId: currentProjectId,
          todolists: [{ id: newTodolistId, title, tasksFilter: "all" }],
        },
      ]);
      setAllTasks([...allTasks, { todolistId: newTodolistId, tasks: [] }]);
    },
    changeTodolistTitle: (todolistId: string, title: string) => {
      setAllTodolists(
        allTodolists.map((todolistsGroup) => {
          if (todolistsGroup.projectId === currentProjectId) {
            return {
              ...todolistsGroup,
              todolists: todolistsGroup.todolists.map((todolist) => {
                if (todolist.id === todolistId) {
                  return { ...todolist, title };
                }
                return todolist;
              }),
            };
          }
          return todolistsGroup;
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
      allTodolists.map((todolistGroup) => {
        if (todolistGroup.projectId === currentProjectId) {
          return todolistGroup.todolists.map((todolist) => {
            let tasks = [] as Task[];
            for (let i = 0; i < allTasks.length; i++) {
              if (allTasks[i].todolistId === todolist.id) {
                tasks = allTasks[i].tasks;
                break;
              }
            }

            if (todolist.tasksFilter === "active") {
              tasks = tasks.filter((task) => !task.isCompleted);
            } else if (todolist.tasksFilter === "completed") {
              tasks = tasks.filter((task) => task.isCompleted);
            }

            return (
              <Todolist
                key={todolist.id}
                todolist={todolist}
                handlersState={handlersState}
                tasks={tasks}
              />
            );
          });
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
