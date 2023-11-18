import { ListWithCards } from "@/types";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

const ListContainer = ({ boardId, data }: ListContainerProps) => {
  return <div>ListContainer</div>;
};

export default ListContainer;
