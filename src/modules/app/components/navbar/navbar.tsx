import style from './navbar.module.css'

export function Navbar() {
    return (
        <div className={style.navbar} onClick={()=>window.location.href="/"}>
            <div className={style.logo}>Fake Store</div>

        </div>
    )
}