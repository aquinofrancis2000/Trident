import { useCustomization } from "../context/Customization";


const Configurator = () => {
  const {
    material,
    setMaterial,
    chairColors,
    chairColor,
    setChairColor,
    cushionColors,
    cushionColor,
    setCushionColor,
  } = useCustomization();

  return (
    
    

    <div className="configurator">
      <div className="configurator_section">
        <div className="configurator_section_title">Chair material</div>
        <div className="configurator_section_values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item_label">Wood</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item_label">Fabric</div>
          </div>
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Chair color</div>
        <div className="configurator_section_values">
          {chairColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === chairColor.color ? "item--active" : ""
              }`}
              onClick={() => setChairColor(item)}
            >
              <div
                className="item_dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item_label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Cushion color</div>
        <div className="configurator_section_values">
          {cushionColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === cushionColor.color ? "item--active" : ""
              }`}
              onClick={() => setCushionColor(item)}
            >
              <div
                className="item_dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item_label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );

  
};

export default Configurator;
