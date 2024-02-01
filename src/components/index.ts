import UpcomingEvents from "./home/upcoming-events";
import DealsChart from "./home/deals-chart";
import DashboardTotalCountCard from "./home/total-count-card";
import LatestActivities from "./home/latest-activities";

import UpcomingEventsSkeleton from "./skeletons/upcoming-events";
import AccordionHeaderSkeleton from "./skeletons/accordion-header";
import KanbanColumnSkeleton from "./skeletons/kanban";
import LatestActivitiesSkeleton from "./skeletons/latest-activities";
import ProjectCardSkeleton from "./skeletons/project-card";

import { ContactStatusTag } from "./tags/contact-status-tag";

import { KanbanBoardContainer } from "./tasks/kanban/board";
import { KanbanBoard } from "./tasks/kanban/board";
import { KanbanColumn } from "./tasks/kanban/column";
import { KanbanItem } from "./tasks/kanban/item";
import { KanbanAddCardButton } from "./tasks/kanban/add-card-button";

import SelectOptionWithAvatar from "./select-option-with-avatar";
import CustomAvatar from "./custom-avatar";
import { Text } from "./text";
import { Accordion } from "./accordion";

export {
  UpcomingEvents,
  DealsChart,
  UpcomingEventsSkeleton,
  AccordionHeaderSkeleton,
  KanbanColumnSkeleton,
  ProjectCardSkeleton,
  LatestActivitiesSkeleton,
  DashboardTotalCountCard,
  LatestActivities,
  SelectOptionWithAvatar,
  CustomAvatar,
  Text,
  ContactStatusTag,
  KanbanBoard,
  KanbanBoardContainer,
  KanbanColumn,
  KanbanItem,
  KanbanAddCardButton,
  Accordion,
};

export * from "./tags/user-tag";
export * from "./text";
export * from "./accordion";
export * from "./tasks/form/description";
export * from "./tasks/form/due-date";
export * from "./tasks/form/stage";
export * from "./tasks/form/title";
export * from "./tasks/form/users";
export * from "./tasks/form/header";
