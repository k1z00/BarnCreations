import { useAppSelector, useAppDispatch } from "../../../../../../shared/store/index";
import { useEffect } from "react";
import { fetchBarn, setCurrentPage, setBedrooms } from "../../../shared/slice/slice-shop";
import "../../../style/bedrooms.scss";

const SideBedrooms: React.FC = () => {
  const { floors, currentPage, priceRange, area, bedrooms } = useAppSelector(
    (state) => state.barn
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchBarn({ page: currentPage, priceRange, floors, area, bedrooms })
    );
  }, [dispatch, currentPage, floors, bedrooms]);

  const handleBedroomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "all" ? null : Number(e.target.value);
    dispatch(setBedrooms(value));
    dispatch(setCurrentPage(1));
  };

  return (
    <div>
      <p className="radio-text">Количество спален</p>
      <form>
        {["all", 1, 2, 3, 4].map((bed) => (
          <>
            <label key={bed} className="radio-label">
              <input
                type="radio"
                value={bed}
                checked={
                  bed === "all" ? bedrooms === null : bedrooms === Number(bed)
                }
                onChange={handleBedroomsChange}
                className="radio-input"
              />
              {bed}
              <span className="custom-radio"></span>
            </label>
            <div className="radio_border"></div>
          </>
        ))}
      </form>
    </div>
  );
};

export default SideBedrooms;
