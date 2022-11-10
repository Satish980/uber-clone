import Image from "next/image"
import avatar from '../temp/avatar.png'
import { BsPerson } from 'react-icons/bs'

const style = {
    wrapper: 'h-16 w-full bg-black text-white flex md:justify-around items-center px-60',
    leftMenu: 'flex gap-3',
    rightMenu: 'flex gap-3 items-center',
    logo: 'text-3x1 text-white flex cursor-pointer mr-16',
    menuItem: 'text-lg text-white font-medium mx-4 items-center flex cursor-pointer',
    userImageContainer: 'mr-2',
    userImage: 'h-10 w-18 mr-4 rounded-full p-px object-cover cursor-pointer',
    loginButton: 'flex items-center hover:bg-[#333333] rounded-full px-4 py-1 cursor-pointer',
    loginText: 'ml-2',
}
// let currentAccount = ''
const currentAccount = '0x1CbbFFD61dEf4e0632768C2f75Ce66E47a8A026E'

const Navbar = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.leftMenu}>
                <div className={style.logo}>Uber</div>
                <div className={style.menuItem}>Ride</div>
                <div className={style.menuItem}>Drive</div>
                <div className={style.menuItem}>More</div>
            </div>
            <div className={style.rightMenu}>
                <div className={style.menuItem}>Help</div>
                <div className={style.menuItem}>Satish</div>
                <div className={style.userImageContainer}>
                    <Image className={style.userImage} src={avatar} width={40} height={40} />
                </div>
                {currentAccount && currentAccount.length ? (
                    <div>
                        {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
                    </div>
                ) : (
                    <div className={style.loginButton}>
                        <BsPerson />
                        <span className={style.loginText}>Log in</span>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar