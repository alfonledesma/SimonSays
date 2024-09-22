// eslint-disable-next-line react/prop-types
export default function ColorCard({ color, onClick, flash }) {
    return (
      <div
        onClick={onClick}
        className={`colorCard ${color} ${flash ? "flash" : ""}`}
      ></div>
    );
  }
  