interface QuestionItemProps {
  id: number;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export default function QuestionItem ({ title, children, isOpen, onClick }: QuestionItemProps) {
  return (
    <div style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
      <button
        onClick={onClick}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left',
          padding: '10px',
        }}
      >
        {title}
      </button>
      {isOpen && (
        <div style={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
          {children}
        </div>
      )}
    </div>
  );
};