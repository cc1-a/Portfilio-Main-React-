// ... (imports remain the same)

export const ThemeToggle = () => {
    // Initialize state to true (dark mode) as we want dark to be the default
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        // --- MODIFIED LOGIC START ---

        // 1. Check if a theme is stored
        if (storedTheme === "light") {
            // If stored theme is explicitly 'light', set state/DOM to light
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            // If no theme is stored (storedTheme is null) OR stored theme is 'dark',
            // we default to dark mode.
            // We set 'dark' in localStorage if it wasn't there (for persistence).
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            if (!storedTheme) {
                localStorage.setItem("theme", "dark");
            }
        }
        
        // --- MODIFIED LOGIC END ---

    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }
    
    // ... (rest of the component's return statement remains the same)
    return <button onClick={toggleTheme} className={cn("fixed max-sm:top-7 max-sm:left-2 top-5 right-5 z-50 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
    )}>
        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}</button>;
}
