type MainTaskProps = {
    icon: string,
    title: string,
    hour: string
}
const MainTask = ({icon, title, hour}:MainTaskProps) => {
  return (
    <div className="mainTasks-wrapper">
    <div className="mainTask">
        <span>{icon}</span>
        <h6>{title}</h6>
        <p>{hour}</p>
    </div>
    </div>
  )
}

export default MainTask
