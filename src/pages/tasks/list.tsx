import {
  KanbanBoard,
  KanbanBoardContainer,
  KanbanColumn,
  KanbanItem,
} from "@/components";

export const List = () => {
  return (
    <>
      <KanbanBoardContainer>
        <KanbanBoard>
          <KanbanColumn>
            <KanbanItem>Asejnr</KanbanItem>
          </KanbanColumn>

          <KanbanColumn>
            <KanbanItem>Aol</KanbanItem>
          </KanbanColumn>
        </KanbanBoard>
      </KanbanBoardContainer>
    </>
  );
};
