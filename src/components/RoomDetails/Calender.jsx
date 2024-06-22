/* eslint-disable react/prop-types */
import { DateRange } from "react-date-range";

const Calender = ({ value }) => {
  return (
    <DateRange
      ranges={[value]}
      rangeColors={["#00B98E"]}
      direction="vertical"
      showDateDisplay={false}
    />
  );
};

export default Calender;
