import NavigationMenu from "./NavigationMenu";

const Header = (): React.ReactElement => {
  return (
    <header className= "bg-slate-950 font-mono text-2xl shadow-lg shadow-slate-500/50">
      <NavigationMenu />
    </header>
  );
};

export default Header;
