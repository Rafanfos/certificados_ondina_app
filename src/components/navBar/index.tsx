interface NavBarProps {
    activeTab: 'students' | 'upload';
    onTabChange: (tab: 'students' | 'upload') => void;
  }
  
  const NavBar: React.FC<NavBarProps> = ({ activeTab, onTabChange }) => {
    return (
      <div className='flex space-x-4'>
        <button
          onClick={() => onTabChange('students')}
          className={`${
            activeTab === 'students'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          } py-2 px-4 rounded`}
        >
          Ver Alunos
        </button>
        <button
          onClick={() => onTabChange('upload')}
          className={`${
            activeTab === 'upload'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          } py-2 px-4 rounded`}
        >
          Upload CSV
        </button>
      </div>
    );
  };
  
  export default NavBar;
  