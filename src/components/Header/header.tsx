import { Link } from "react-router-dom"
import styles from "../Header/header.module.css"
import Alarm from "./Alarm/alarm"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { useDispatch } from "react-redux"
import { logout } from "../../Redux/user"

const Header: React.FC = () => {
  const isLogged = useSelector((state: RootState) => state.user.isLogged)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <div className={styles.headerContainer}>
        <Link to="/MainPage">
          <img className={styles.logo} src="src/assets/logo.svg" />
        </Link>
        <div className={styles.menu}>
          <ul className={styles.nav}>
            <Link to="/RoomMate">
              <li>룸메이트 구해요</li>
            </Link>
            {isLogged && (
              <>
                <Link to="/MyPage">
                  <li>마이페이지</li>
                </Link>
                <Link to="/" onClick={handleLogout}>
                  <li>로그아웃</li>
                </Link>
              </>
            )}
            {!isLogged && (
              <Link to="/">
                <li>로그인</li>
              </Link>
            )}
          </ul>
        </div>
        <Alarm />
      </div>
    </>
  )
}

export default Header
