export default function MenuDotsComponent(props) {
  const handleClick = (val) => {
    if (props.onSelected) {
      props.onSelected(val);
    }
  };

  return (
    <div className="menu__dots__container">
      {(() => {
        let elements = [];
        for (var i = 0; i < props.length; i++) {
          elements.push(
            <div
              className={"dot" + (props.selected == i ? " active" : "")}
              key={i}
              onClick={() => handleClick(i)}
            ></div>
          );
        }
        return elements;
      })()}
    </div>
  );
}
