import { useAppSelector, useAppDispatch } from "../../../../../../shared/store/index";
import { useEffect } from "react";
import { fetchBarn, setCurrentPage, setFloors } from "../../../shared/slice/slice-shop";
import "../../../style/floor.scss";

const SideFloors: React.FC = () => {
  const { floors, currentPage, priceRange, area, bedrooms } = useAppSelector(
    (state) => state.barn
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchBarn({ page: currentPage, priceRange, floors, area, bedrooms })
    );
  }, [dispatch, currentPage, floors]);

  const handleFloorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "all" ? null : Number(e.target.value);
    dispatch(setFloors(value));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className="flors_container">
      <label className="label_flors">Фильтр по этажам:</label>
      <select className="select_floors" onChange={handleFloorChange}>
        <option value="all">Все</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
};

export default SideFloors;
