type MainTaskProps = {
    icon: string,
    title: string,
    hour: string,
    description: string;
}
const MainTask = ({icon, title, hour, description}:MainTaskProps) => {
  return (
    <div className="mainTasks-wrapper">
    <div className="mainTask">
        <span>{icon}</span>
        <div className="mainTasks-center">
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
        <p>{hour}</p>
    </div>
    </div>
  )
}

export default MainTask
