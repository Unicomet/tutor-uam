import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface PageSectionProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: Function;
}

export const PageSection: React.FC<PageSectionProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious
            onClick={() => handlePrevPage()}
            className=" text-lg"
          />
        </PaginationItem>
        <PaginationItem className="cursor-pointer">
          <PaginationNext
            onClick={() => handleNextPage()}
            className="text-lg"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
