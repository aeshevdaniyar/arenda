import {
  Drawer,
  Box,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import {
  Calendar,
  CalendarControls,
  CalendarPrevButton,
  CalendarNextButton,
  CalendarMonths,
  CalendarMonth,
  CalendarMonthName,
  CalendarWeek,
  CalendarDays,
  CalendarDate,
  CalendarValues,
} from "@uselessdev/datepicker";
import { ru } from "date-fns/locale";
import { useState } from "react";
import { MobileSearchInput } from "./MobileSearchInput";
import { MobileSearchGuests } from "./MobileSearchGuests";
import { MobileSearchDatePicker } from "./MobileSearchDatePicker";

enum ContentType {
  DATEPICKER = "DATEPICKER",
  SEARCH = "SEARCH",
  GUESTS = "GUESTS",
}

export const MobileSearch = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dates, setDates] = useState<CalendarValues | CalendarDate>({});
  const [contentType, setContentType] = useState();

  const handleSelectDate = (dates: CalendarValues | CalendarDate) => {
    setDates(dates);
  };

  const MONTHS = 12;
  return (
    <VStack w={"full"} gap={"2"}>
      <MobileSearchInput />
      <MobileSearchDatePicker />
      <MobileSearchGuests />
      {/* <Drawer size="full" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{` drawer contents`}</DrawerHeader>
          <DrawerBody> 
            <Calendar
              locale={ru}
              value={dates as CalendarValues}
              onSelectDate={handleSelectDate}
              months={MONTHS}
            >
              <CalendarControls>
                <CalendarPrevButton />
                <CalendarNextButton />
              </CalendarControls>

              <CalendarMonths display={"flex"} flexDirection={"column"} gap={6}>
                {[...Array(MONTHS).keys()].map((month) => (
                  <CalendarMonth month={month} key={month}>
                    <CalendarMonthName />
                    <CalendarWeek />
                    <CalendarDays />
                  </CalendarMonth>
                ))}
              </CalendarMonths>
            </Calendar>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
    </VStack>
  );
};