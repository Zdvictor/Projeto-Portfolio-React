import {FiMenu} from "react-icons/fi"
import { useEffect, useState, useContext } from "react"
import { ScrollContext } from "../../contex/scrollContext"
import "./header.css"

export default function Header() {

    const [width, setWidth] = useState(window.innerWidth)
    const [showMenu, setShowMenu] = useState(width < 800 ? true : false)
    const [openMenu, setOpenMenu] = useState(false)
    const {onScroll, id} = useContext(ScrollContext)



    useEffect(() => {

        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    useEffect(() => {

        if (width < 800) {
            setShowMenu(true)
        } else {
            setShowMenu(false)
        }

    }, [width])


    return (
        <header>
            {!showMenu ? (
                <ul>
                    <li onClick={() => onScroll(1)}>HOME {id == 1 && <hr /> }</li>
                    <li onClick={() => onScroll(2)}>ESPECIALIDADES {id == 2 && <hr /> }</li>
                    <li onClick={() => onScroll(3)}>EXPERIÊNCIA {id == 3 && <hr /> }</li>
                    <li onClick={() => onScroll(4)}>CONTATO {id == 4 && <hr /> }</li>
                </ul>
            ) : (
                <div className={!openMenu ? "showMenu" : "openMenu"}>
                    <button onClick={() => setOpenMenu(!openMenu)}>
                        <FiMenu size={80} />
                    </button>
                    {openMenu && (
                        <div className="menuItens">
                            <p onClick={() => onScroll(1)}>HOME {id == 1 && <hr /> } </p>
                            <p onClick={() => onScroll(2)}>ESPECIALIDADES {id == 2 && <hr /> } </p>
                            <p onClick={() => onScroll(3)}>EXPERIÊNCIA {id == 3 && <hr /> } </p>
                            <p onClick={() => onScroll(4)}>CONTATO {id == 4 && <hr /> } </p>
                        </div>
                    )}
                </div>
            )}
        </header>
    )
}
