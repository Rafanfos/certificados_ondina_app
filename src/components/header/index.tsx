type HeaderProps = {
  userName: string;
};

const Header = ({ userName }: HeaderProps) => {
  return (
    <header className="bg-blue-600 text-white p-4 text-center">
      <h1 className="text-2xl">Bem-vindo, {userName}!</h1>
      <p className="text-sm">Estamos felizes em tê-lo de volta.</p>
    </header>
  );
};

export default Header;
