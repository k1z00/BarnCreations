import conditions from "../json/conditions.json";
import { useEffect, useState } from "react";

interface ICondition {
  id: number;
  title: string;
  description: string;
}

const data = conditions.conditions;

const ConditionsApp: React.FC = () => {
  const [conditions, setConditions] = useState<ICondition[]>([]);
  useEffect(() => {
    setConditions(data);
  }, []);

  return (
    <section className="conditions_section">
         
      <div className="conditions_container">
      <h1 className="conditions_title">Условия покупки</h1>
        <div className="conditions_items">
          {conditions.map((condition) => (
            <div className="conditions_item" key={condition.id}>
              <h3 className="conditions_item_title">{condition.title}</h3>
              <p className="conditions_item_text">{condition.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsApp;
