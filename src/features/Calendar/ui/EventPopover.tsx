import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CalendarPanel, DefaultConfigs } from "@shared/ui/Calendar";
import { useAppDispatch } from "@shared/utils/hooks/useAppDispatch";
import { useAppSelector } from "@shared/utils/hooks/useAppSelecter";
import {
  addDays,
  differenceInDays,
  eachDayOfInterval,
  format,
  getOverlappingDaysInIntervals,
  isWithinInterval,
  max,
  min,
} from "date-fns";
import { ru } from "date-fns/locale";
import {
  FC,
  LegacyRef,
  MutableRefObject,
  PropsWithChildren,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { RiDragMove2Line } from "react-icons/ri";
import { calendarActions } from "..";
import {
  getObjectAvailibility,
  getObjectAvailibilityById,
  getSeasonPriceByDate,
} from "../model/selectors";
import { SidebarType } from "../model/types";
import { useDeleteModal } from "../model/useDeleteModal";
import { useSidebar } from "../model/useSidebar";
import { toDay } from "../utils/toDay";
interface EventPopoverProps {
  id: number;
  objectId: number;
}
export const EventPopover: FC<PropsWithChildren<EventPopoverProps>> = memo(
  (props) => {
    const { children, objectId, id } = props;

    const dispatch = useAppDispatch();
    const { onOpen: onDeleteModalOpen } = useDeleteModal();

    const { onOpen: sidebarOnOpen } = useSidebar();

    const { color, comment, createdDate, minDate, maxDate } = useAppSelector(
      getObjectAvailibilityById(objectId, id)
    );
    const availability = useAppSelector(getObjectAvailibility(objectId));

    const selectedDatesForCost = useAppSelector(
      getSeasonPriceByDate(
        objectId,
        eachDayOfInterval({
          start: minDate,
          end: maxDate,
        })
      )
    );
    const [startDate, setStartDate] = useState(minDate);
    const {
      isOpen: alertModalIsOpen,
      onClose: alertModalOsClose,
      onOpen: alertModalOnOpen,
    } = useDisclosure();
    const cancelRef = useRef() as MutableRefObject<HTMLButtonElement>;
    const { onOpen, onClose, isOpen } = useDisclosure();
    const {
      isOpen: startIsOpen,
      onClose: startOnClose,
      onOpen: startOnOpen,
    } = useDisclosure();

    const onSaveDates = () => {
      const newMinDate = startDate;
      const newMaxDate = addDays(startDate, differenceInDays(maxDate, minDate));
      const isCanSelect = availability
        .filter((a) => {
          return (
            isWithinInterval(newMinDate, {
              start: a.minDate,
              end: a.maxDate,
            }) ||
            isWithinInterval(newMaxDate, {
              start: a.minDate,
              end: a.maxDate,
            }) ||
            isWithinInterval(a.minDate, {
              start: newMinDate,
              end: newMaxDate,
            }) ||
            isWithinInterval(a.maxDate, {
              start: newMinDate,
              end: newMaxDate,
            }) ||
            !!getOverlappingDaysInIntervals(
              {
                start: min([newMaxDate, newMinDate]),
                end: max([newMaxDate, newMinDate]),
              },
              {
                start: a.minDate,
                end: a.maxDate,
              }
            )
          );
        })
        .filter((a) => a.id != id);

      if (isCanSelect.length == 0) {
        dispatch(
          calendarActions.editAvailabilityDates({
            id,
            minDate: newMinDate,
            maxDate: newMaxDate,
            objectId,
          })
        );
        onClose();
      } else {
        alertModalOnOpen();
      }
    };

    const onDelete = () => {
      onDeleteModalOpen({
        availabilityId: id,
        objectId,
      });
    };
    const onEdit = () => {
      sidebarOnOpen({
        objectId,
        availabilityId: id,
        type: SidebarType.EDIT,
      });
    };
    useEffect(() => {
      if (isOpen) {
        setStartDate(minDate);
      }
    }, [isOpen, maxDate, minDate]);
    return (
      <>
        <Popover strategy="fixed" isLazy closeOnBlur={false}>
          <PopoverTrigger>{children}</PopoverTrigger>
          <PopoverContent
            fontWeight={"medium"}
            color="white"
            bg={color}
            borderColor={color}
          >
            <PopoverHeader pt={2} fontWeight="bold" border="0">
              {comment || "Нет коментария"}
            </PopoverHeader>
            <PopoverArrow bg={color} />
            <PopoverCloseButton />
            <PopoverBody>
              <HStack spacing={1}>
                <Text>заезд:</Text>
                <Text>{format(minDate, "y-M-d")}</Text>
              </HStack>
              <HStack spacing={1}>
                <Text>выезд:</Text>
                <Text>{format(maxDate, "y-M-d")}</Text>
              </HStack>
              <HStack spacing={1}>
                <Text>суток:</Text>
                <Text>{differenceInDays(maxDate, minDate) + 1}</Text>
              </HStack>
              <HStack spacing={1}>
                <Text>дата создания:</Text>
                <Text>{format(createdDate, "y-M-d H:mm:ss")}</Text>
              </HStack>
              <HStack>
                <Text>к оплате:</Text>
                <Text>
                  {selectedDatesForCost.reduce((acc, cur) => acc + cur.cost, 0)}
                </Text>
              </HStack>
            </PopoverBody>
            <PopoverFooter
              border="0"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pb={4}
            >
              <HStack mt={2} flexWrap={"wrap"}>
                <Button
                  leftIcon={<EditIcon />}
                  colorScheme="yellow"
                  color={"white"}
                  size="sm"
                  onClick={onEdit}
                >
                  Редактировать
                </Button>
                <Button
                  onClick={onDelete}
                  size="sm"
                  leftIcon={<DeleteIcon />}
                  colorScheme="red"
                >
                  Удалить
                </Button>
                <Popover
                  isLazy
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                  placement="top"
                  closeOnBlur={false}
                >
                  <PopoverTrigger>
                    <Button
                      size="sm"
                      colorScheme="green"
                      leftIcon={<RiDragMove2Line />}
                    >
                      Переместить
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent h="full" p={5} color="black">
                    <PopoverArrow />
                    <PopoverCloseButton colorScheme="blue" />
                    <Stack spacing={4}>
                      <FormControl>
                        <FormLabel>
                          Выберите дату на которую хотите перенести
                        </FormLabel>

                        <Button
                          onClick={startOnOpen}
                          w="full"
                          variant={"outline"}
                          h={12}
                        >
                          {format(startDate, "d LLLL yyyy", {
                            locale: ru,
                          })}
                        </Button>
                      </FormControl>

                      <ButtonGroup display="flex" justifyContent="flex-end">
                        <Button variant="outline" onClick={onClose}>
                          Отмена
                        </Button>
                        <Button colorScheme="teal" onClick={onSaveDates}>
                          Сохранить
                        </Button>
                      </ButtonGroup>
                    </Stack>
                  </PopoverContent>
                </Popover>
              </HStack>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
        <Modal isOpen={startIsOpen} onClose={startOnClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Выберите даты</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex w="full" h="full">
                <CalendarPanel
                  dayzedHookProps={{
                    selected: startDate,
                    onDateSelected: ({ date }) => {
                      setStartDate(date);
                      startOnClose();
                    },
                    monthsToDisplay: 1,
                    date: startDate,
                    firstDayOfWeek: 1,
                    minDate: toDay(new Date()),
                    maxDate: new Date(
                      new Date().getFullYear(),
                      new Date().getMonth() + 12,
                      new Date().getDate()
                    ),
                  }}
                  configs={DefaultConfigs}
                  showTooltipOnHover={false}
                  showTooltipOnSelect={false}
                  hoveredDate={null}
                  showNavigationButton
                />
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button variant={"ghost"} mr={3} onClick={startOnClose}>
                Закрыть
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <AlertDialog
          isOpen={alertModalIsOpen}
          leastDestructiveRef={cancelRef}
          onClose={alertModalOsClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Неверная дата
              </AlertDialogHeader>

              <AlertDialogBody>
                Невозможно сохранить изменения. К этим датам в вашем календаре
                уже относится другой период.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  ref={cancelRef as LegacyRef<HTMLButtonElement>}
                  onClick={alertModalOsClose}
                  colorScheme="red"
                >
                  Закрыть
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  }
);
