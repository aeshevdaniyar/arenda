import { CalendarIcon } from "@chakra-ui/icons";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import { CalendarPanel, DefaultConfigs } from "@shared/ui/Calendar";
import { useAppDispatch } from "@shared/utils/hooks/useAppDispatch";
import { useAppSelector } from "@shared/utils/hooks/useAppSelecter";
import { addMonths, subMonths } from "date-fns";
import {
  LegacyRef,
  MutableRefObject,
  memo,
  useRef,
  useTransition,
} from "react";
import { calendarActions } from "..";
import { getCalendarActions } from "../model/selectors";
import { toDay } from "../utils/toDay";

export const GoToDateBtn = memo(() => {
  const [isPending, startTransition] = useTransition();
  const dispatch = useAppDispatch();
  const datepickerRef = useRef() as MutableRefObject<HTMLElement>;
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { beginDate } = useAppSelector(getCalendarActions);
  useOutsideClick({
    ref: datepickerRef,
    handler: onClose,
  });
  return (
    <Popover isLazy placement="bottom-start" onClose={onClose} isOpen={isOpen}>
      <PopoverTrigger>
        <Button
          rightIcon={<CalendarIcon />}
          rounded="full"
          bgColor={"white"}
          onClick={onOpen}
          isLoading={isPending}
        >
          Перейти к дате
        </Button>
      </PopoverTrigger>
      <PopoverContent ref={datepickerRef as LegacyRef<HTMLElement>} w="full">
        <CalendarPanel
          dayzedHookProps={{
            selected: beginDate,
            onDateSelected: ({ date }) => {
              startTransition(() => {
                dispatch(calendarActions.setBeginDate(date));
                onClose();
              });
            },
            monthsToDisplay: 2,
            date: beginDate,
          }}
          configs={DefaultConfigs}
          showTooltipOnHover={false}
          showTooltipOnSelect={false}
          hoveredDate={null}
          showNavigationButton
          minDate={subMonths(toDay(new Date()), 6)}
          maxDate={addMonths(toDay(new Date()), 12)}
        />
      </PopoverContent>
    </Popover>
  );
});
