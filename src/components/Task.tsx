/*
TaskData represents the domain model, which is the shape
of a task as it exists in the application's data layer.
This is the data contract.
*/

import type { TaskData } from "../types";

/*
TaskProps represents the component interface, which is
what this component needs in order to function. This is
the props contract.
*/

interface TaskProps {
  task: TaskData;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

/*
Task represents the component implementation. This is
the presentation logic.
*/

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor={`archiveTask-${id}`}
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span
          className="checkbox-custom"
          onClick={() => {
            onArchiveTask(id);
          }}
        />
      </label>
      <label htmlFor={`title-${id}`} aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          id={`title-${id}`}
          placeholder="Input title"
        />
      </label>
      {state !== "TASK_ARCHIVED" && (
        <button
          type="button"
          onClick={() => {
            onPinTask(id);
          }}
          className="pin-button"
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
}
