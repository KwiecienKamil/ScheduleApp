import dayjs from 'dayjs'
import '../../dist/css/App.css'

type DayProps = {
    day: dayjs.Dayjs,
    rowIdx: number,
}

const Day = ({day, rowIdx}: DayProps) => {
    const getCurrentDay = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "currentDay" : "notCurrentDay"
    }
  return (
    <div className='singleDay' key={rowIdx}>
        {rowIdx === 0 && (
            <p>{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`${getCurrentDay()}`}>{day.format("DD").toUpperCase()}</p>
    </div>
  )
}

export default Day
