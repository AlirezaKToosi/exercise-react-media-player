import '../style/Header.css'

export default function Header() {
  return (
    <>
      <header className="header">
        <span className="arrow-back material-icons"> arrow_back_ios </span>
        <span className="header-text">Music Player</span>
        <span className="three-dots material-icons"> more_vert </span>
      </header>
    </>
  );
}
