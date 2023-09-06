import { VStack } from "@chakra-ui/react";

import { useState } from "react";
import { MobileSearchInput } from "./MobileSearchInput";
import { MobileSearchGuests } from "./MobileSearchGuests";
import { MobileSearchDatePicker } from "./MobileSearchDatePicker";

export const MobileSearch = () => {
  const [calendarDates, setCalendarDates] = useState<Date[]>([]);

  const handleSelectDate = (dates: Date[]) => {
    setCalendarDates(dates);
  };

  return (
    <VStack w={"full"} gap={"2"}>
      <MobileSearchInput />
      <MobileSearchDatePicker
        dates={calendarDates}
        handleSelectDate={handleSelectDate}
      />
      <MobileSearchGuests />
    </VStack>
  );
};
