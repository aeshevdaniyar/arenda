import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addDays, isSameDay, subDays, subMonths } from "date-fns";
import { EmploymentCalendarState, SidebarType } from "./types";
const initialState = {
  common: {
    desktop: {
      widthCell: 72,
    },
    mobile: {
      widthCell: 50,
    },
    hotels: {
      countMonth: 13,
      startMonth: new Date(),
    },
    objects: {
      countMonth: 19,
      startMonth: subMonths(new Date(), 6),
    },
    currentWidth: 0,
    sidebarWidth: 280,
  },
  actions: {
    beginDate: new Date(),
    countDay: 0,
  },
  calendar: {
    rangeSelect: {
      in: null,
      out: null,
    },
    rangeSelectObjectId: null,
  },
  sidebar: {
    isOpen: false,
    objectId: null,
  },
  deleteModal: {
    isOpen: false,
    availibilityId: null,
    objectId: null,
  },
  objects: [
    {
      availability: [],
      objectDefaultPerDayCost: 1000,
      seasonsPrice: [
        {
          date: new Date(2023, 10, 29),
          cost: 2000,
        },
        {
          date: new Date(2023, 11, 29),
          cost: 3000,
        },
      ],
      id: 0,
      address: "Бостери,Казак-тукуму, 60/1",
      name: "Каприз",
    },
    {
      availability: [],
      objectDefaultPerDayCost: 1000,
      seasonsPrice: [
        {
          date: new Date(2023, 10, 29),
          cost: 2000,
        },
        {
          date: new Date(2023, 11, 29),
          cost: 3000,
        },
      ],
      id: 1,
      address: "Бостери,Казак-тукуму, 60/1",
      name: "Номер Стандарт 1",
    },
    {
      availability: [],
      objectDefaultPerDayCost: 1000,
      seasonsPrice: [
        {
          date: new Date(2023, 10, 29),
          cost: 2000,
        },
        {
          date: new Date(2023, 11, 29),
          cost: 3000,
        },
      ],
      id: 2,
      address: "Бостери,Казак-тукуму, 60/1",
      name: "Номер LUX",
    },
    {
      availability: [],
      objectDefaultPerDayCost: 1000,
      seasonsPrice: [
        {
          date: new Date(2023, 10, 29),
          cost: 2000,
        },
        {
          date: new Date(2023, 11, 29),
          cost: 3000,
        },
      ],
      id: 3,
      address: "Бостери,Казак-тукуму, 60/1",
      name: "Комната на 3 человека LUX",
    },
    {
      availability: [],
      objectDefaultPerDayCost: 1000,
      seasonsPrice: [
        {
          date: new Date(2023, 10, 29),
          cost: 2000,
        },
        {
          date: new Date(2023, 11, 29),
          cost: 3000,
        },
      ],
      id: 4,
      address: "Бостери,Казак-тукуму, 60/1",
      name: "Комната с кухней",
    },
    {
      availability: [],
      objectDefaultPerDayCost: 1000,
      seasonsPrice: [
        {
          date: new Date(2023, 10, 29),
          cost: 2000,
        },
        {
          date: new Date(2023, 11, 29),
          cost: 3000,
        },
      ],
      id: 5,
      address: "Бостери,Казак-тукуму, 60/1",
      name: "Коттедж",
    },
    {
      availability: [],
      objectDefaultPerDayCost: 1000,
      seasonsPrice: [
        {
          date: new Date(2023, 10, 29),
          cost: 2000,
        },
        {
          date: new Date(2023, 11, 29),
          cost: 3000,
        },
      ],
      id: 6,
      address: "Бостери,Казак-тукуму, 62/1",
      name: "Хаят",
    },
    {
      availability: [],
      objectDefaultPerDayCost: 16000,
      seasonsPrice: [
        {
          date: new Date(2023, 10, 29),
          cost: 2000,
        },
        {
          date: new Date(2023, 11, 29),
          cost: 3000,
        },
      ],
      id: 7,
      address: "Бостери,Казак-тукуму, 50/1",
      name: "NOVATEL",
    },
    {
      availability: [],
      objectDefaultPerDayCost: 10000,
      seasonsPrice: [
        {
          date: new Date(2023, 10, 29),
          cost: 2000,
        },
        {
          date: new Date(2023, 11, 29),
          cost: 3000,
        },
      ],
      id: 8,
      address: "Бостери,Казак-тукуму, 1/1",
      name: "Турак Hotel",
    },
    {
      availability: [],
      objectDefaultPerDayCost: 1000,
      seasonsPrice: [
        {
          date: new Date(2023, 10, 29),
          cost: 2000,
        },
        {
          date: new Date(2023, 11, 29),
          cost: 3000,
        },
      ],
      id: 9,
      address: "Бостери,Казак-тукуму, 2/1",
      name: "Арноо",
    },
    {
      availability: [],
      objectDefaultPerDayCost: 1000,
      seasonsPrice: [
        {
          date: new Date(2023, 10, 29),
          cost: 2000,
        },
        {
          date: new Date(2023, 11, 29),
          cost: 3000,
        },
      ],
      id: 10,
      address: "Бостери,Казак-тукуму, 20/1",
      name: "Imperia Hotel",
    },
    {
      availability: [],
      objectDefaultPerDayCost: 1000,
      seasonsPrice: [
        {
          date: new Date(2023, 10, 29),
          cost: 2000,
        },
        {
          date: new Date(2023, 11, 29),
          cost: 3000,
        },
      ],
      id: 11,
      address: "Бостери,Казак-тукуму, 30/1",
      name: "Major Hotel",
    },
  ],
  currentVisbleId: 0,
  pagination: {
    currentPage: 1,
    visibleObjectCount: 6,
  },
  search: "",
  searchPopover: {
    isOpen: false,
  },
} as EmploymentCalendarState;

const correctDate = (date: Date, isHotel: boolean): Date => {
  let minDate;

  if (isHotel) {
    minDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );
  } else {
    minDate = new Date(
      new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 6,
        new Date().getDate()
      )
    );
  }

  const maxDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 12,
    new Date().getDate()
  );

  if (
    minDate.getTime() <= date.getTime() &&
    date.getTime() <= maxDate.getTime()
  ) {
    return date;
  }
  if (minDate.getTime() > date.getTime()) {
    return minDate;
  }

  return maxDate;
};
const calendarSlice = createSlice({
  name: "calendarSlice",
  initialState,
  reducers: {
    increaseDay(state) {
      state.actions.beginDate = correctDate(
        addDays(state.actions.beginDate, 1),
        false
      );
    },
    decreaseDay(state) {
      state.actions.beginDate = correctDate(
        subDays(state.actions.beginDate, 1),
        false
      );
    },

    increaseStep(state) {
      state.actions.beginDate = correctDate(
        addDays(state.actions.beginDate, state.actions.countDay),
        false
      );
    },
    decreaseStep(state) {
      state.actions.beginDate = correctDate(
        subDays(state.actions.beginDate, state.actions.countDay),
        false
      );
    },
    initWidthWindow(state) {
      const width = window.innerWidth;

      if (width <= 968) {
        state.common.currentWidth = state.common.mobile.widthCell;

        state.common.sidebarWidth = 50;
        state.pagination.visibleObjectCount = 4;
      } else {
        state.common.currentWidth = state.common.desktop.widthCell;
        state.common.sidebarWidth = 280;
      }

      state.actions.countDay =
        Math.floor(
          (width - state.common.sidebarWidth) / state.common.currentWidth
        ) - 1;
    },
    setBeginDate(state, action) {
      state.actions.beginDate = action.payload;
    },

    setRangeIn(state, action: PayloadAction<Date>) {
      state.calendar.rangeSelect.in = action.payload;
    },

    setRangeOut(state, action: PayloadAction<Date>) {
      state.calendar.rangeSelect.out = action.payload;
    },

    setClearRange(state) {
      state.calendar.rangeSelect.in = null;
      state.calendar.rangeSelect.out = null;
    },

    setOnOpen(
      state,
      action: PayloadAction<{
        objectId: number;
        type?: SidebarType;
        availabilityId?: number;
      }>
    ) {
      state.sidebar.isOpen = true;
      state.sidebar.objectId = action.payload.objectId;
      state.sidebar.type = action.payload.type;
      if (action.payload.availabilityId)
        state.sidebar.availabilityId = action.payload.availabilityId;
    },

    setOnClose(state) {
      state.sidebar.isOpen = false;
      state.sidebar.objectId = null;
      state.sidebar.type = undefined;
    },
    editAvailability(
      state,
      action: PayloadAction<{
        id: number;
        objectId: number;
        minDate: Date;
        maxDate: Date;
        comment: string;
        color: string;
      }>
    ) {
      const objectIndex = state.objects.findIndex(
        (object) => object.id == action.payload.objectId
      );

      const availability = state.objects[objectIndex].availability.filter(
        (a) => a.id == action.payload.id
      )[0];

      const otherAvailabilities = state.objects[
        objectIndex
      ].availability.filter((a) => a.id != action.payload.id);

      state.objects[objectIndex].availability = [
        ...otherAvailabilities,
        {
          ...availability,
          minDate: action.payload.minDate,
          maxDate: action.payload.maxDate,
          color: action.payload.color,
          comment: action.payload.comment,
        },
      ];
    },
    createAvailability(
      state,
      action: PayloadAction<{
        id: number;
        objectId: number;
        minDate: Date;
        maxDate: Date;
        comment: string;
        color: string;
        createdDate: Date;
        totalSum: number;
      }>
    ) {
      const objectIndex = state.objects.findIndex(
        (object) => object.id == action.payload.objectId
      );

      state.objects[objectIndex].availability = [
        ...state.objects[objectIndex].availability,
        {
          id: action.payload.id,
          maxDate: action.payload.maxDate,
          minDate: action.payload.minDate,
          comment: action.payload.comment,
          color: action.payload.color,
          createdDate: action.payload.createdDate,
          objectId: action.payload.objectId,
          totalSum: action.payload.totalSum,
        },
      ];
    },
    deleteAvailability(
      state,
      action: PayloadAction<{
        objectId: number;
        id: number;
      }>
    ) {
      const objectIndex = state.objects.findIndex(
        (object) => object.id == action.payload.objectId
      );

      state.objects[objectIndex].availability = state.objects[
        objectIndex
      ].availability.filter((a) => a.id != action.payload.id);
    },
    editAvailabilityDates(
      state,
      action: PayloadAction<{
        objectId: number;
        id: number;
        minDate: Date;
        maxDate: Date;
      }>
    ) {
      const objectIndex = state.objects.findIndex(
        (object) => object.id == action.payload.objectId
      );
      const availabilityIndex = state.objects[
        objectIndex
      ].availability.findIndex((a) => a.id == action.payload.id);
      state.objects[objectIndex].availability[availabilityIndex].minDate =
        action.payload.minDate;
      state.objects[objectIndex].availability[availabilityIndex].maxDate =
        action.payload.maxDate;
    },
    createSeasonPrice(
      state,
      action: PayloadAction<{
        dates: Date[];
        cost: number;
        objectId: number;
      }>
    ) {
      const objectIndex = state.objects.findIndex(
        (object) => object.id == action.payload.objectId
      );
      const findDateWithSeasonPrice = action.payload.dates
        .map((date) => {
          return state.objects[objectIndex].seasonsPrice.findIndex((price) =>
            isSameDay(price.date, date)
          );
        })
        .filter((num) => num >= 0);
      const restDate = action.payload.dates.filter((date) => {
        const findedDate = !!state.objects[objectIndex].seasonsPrice.filter(
          (price) => isSameDay(date, price.date)
        ).length;

        return !findedDate;
      });

      findDateWithSeasonPrice.forEach(
        (indexOfSeason) =>
          (state.objects[objectIndex].seasonsPrice[indexOfSeason].cost =
            action.payload.cost)
      );

      restDate.forEach((date) => {
        state.objects[objectIndex].seasonsPrice = [
          ...state.objects[objectIndex].seasonsPrice,
          {
            cost: action.payload.cost,
            date,
          },
        ];
      });
    },

    setCurrentVisbleId(state, action) {
      state.currentVisbleId = action.payload;
    },
    setDeleteModalOnOpen(
      state,
      action: PayloadAction<{
        objectId: number;
        availabilityId: number;
      }>
    ) {
      state.deleteModal.isOpen = true;
      state.deleteModal.availibilityId = action.payload.availabilityId;
      state.deleteModal.objectId = action.payload.objectId;
    },
    setDeleteModalOnClose(state) {
      state.deleteModal.isOpen = false;
      state.deleteModal.availibilityId = null;
      state.deleteModal.objectId = null;
    },

    increaseCurrentPage(state) {
      state.pagination.currentPage = Math.min(
        state.pagination.currentPage + 1,
        Math.ceil(state.objects.length / state.pagination.visibleObjectCount)
      );
    },
    decreaseCurrentPage(state) {
      state.pagination.currentPage = Math.max(
        state.pagination.currentPage - 1,
        1
      );
    },

    jumpPage(state, action: PayloadAction<number>) {
      const pageNumber = Math.max(
        1,
        Math.min(
          action.payload,
          Math.ceil(state.objects.length / state.pagination.visibleObjectCount)
        )
      );

      state.pagination.currentPage = pageNumber;
    },

    search(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },

    setOpenSearchPopover(state) {
      state.searchPopover.isOpen = true;
    },

    setCloseSearchPopover(state) {
      state.searchPopover.isOpen = false;
    },
  },
});

export const { reducer: calendarReducer, actions: calendarActions } =
  calendarSlice;
