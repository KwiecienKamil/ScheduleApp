
import { FaRegUserCircle } from "react-icons/fa";


const Profile = () => {
  return (
    <section className="profile">
        <div>
        <h6>Kamil Kwiecień</h6>
        <p>My settings</p>
        </div>
        <span className="profile-icon">
            <FaRegUserCircle size={20}/>
            </span>
    </section>
  )
}

export default Profile
