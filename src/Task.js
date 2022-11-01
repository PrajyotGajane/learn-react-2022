export const Task = (props) => {
  return (
    <div>
      <h1>{props.taskName}</h1>
      <button
        onClick={() => props.taskCompleted(props.id)}
        style={{
          backgroundColor: props.isCompleted ? "green" : "",
        }}
      >
        Complete
      </button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};
