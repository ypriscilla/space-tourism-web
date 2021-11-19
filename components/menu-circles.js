export default function MenuCirclesComponent(props) {
  const handleClick = (val) => {
    if (props.onSelected) {
      props.onSelected(val);
    }
  };

  return (
    <div className="menu__circles__container">
      {(() => {
        let elements = [];
        for (var i = 0; i < props.length; i++) {
          elements.push(
            <div
              className={"circle" + (props.selected == i ? " active" : "")}
              key={i}
              onClick={() => handleClick(i)}
            >
              {i + 1}
            </div>
          );
        }
        return elements;
      })()}
    </div>
  );
}
