import ThemeSwitcher from "../ThemeSwitcher"

const Header = () => {
    return (
       <header className="dark:text-CustomAntiqueWhite text-CustomSepia w-full flex flex-col items-center gap-3 p-5">
            <h1 className="font-bold text-3xl lg:text-4xl w-full text-center">Hoje na história</h1>
            <ThemeSwitcher/>
       </header> 
    )
}

export default Header