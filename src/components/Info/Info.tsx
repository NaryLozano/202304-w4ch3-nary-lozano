interface InfoProps {
  isActive: boolean;
}

const Info = ({ isActive }: InfoProps): JSX.Element => {
  return (
    <>
      <span className={`message ${isActive ? "" : "off"}`}>Calling...</span>
    </>
  );
};

export default Info;
