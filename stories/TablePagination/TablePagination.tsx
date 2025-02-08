import React, { useCallback, useEffect, useState } from 'react';
import { Col, Form, Pagination, Row } from 'react-bootstrap';

import { KTIcon } from '../KTICon/KTIcon';

export type TablePaginationProps = {
  currentPage?: number;
  totalPage?: number;
  perPage?: number;
  onPageChange?: (page: number) => void;
  onPerPageChange?: (perPage: number) => void;
};

export const TablePagination = (props: TablePaginationProps) => {
  const {
    currentPage = 1,
    totalPage = 1,
    perPage = 20,
    onPageChange,
    onPerPageChange,
  } = props;

  const setPage = (page: number) => onPageChange && onPageChange(page);

  const setPerPage = (perPage: number) =>
    onPerPageChange && onPerPageChange(perPage);

  const filterPages = useCallback(
    (visiblePages: number[]) => {
      return visiblePages.filter((page: number) => page <= totalPage);
    },
    [totalPage]
  );

  const getVisiblePages = useCallback(
    (page: number, total: number) => {
      if (total < 7) {
        return filterPages([1, 2, 3, 4, 5, 6]);
      } else {
        if (page % 5 >= 0 && page > 4 && page + 2 < total) {
          return [1, page - 1, page, page + 1, total];
        } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
          return [1, total - 3, total - 2, total - 1, total];
        } else {
          return [1, 2, 3, 4, 5, total];
        }
      }
    },
    [filterPages]
  );

  const [visiblePages, setVisiblePages] = useState<number[]>(
    getVisiblePages(currentPage, totalPage)
  );

  useEffect(() => {
    const visiblePages = getVisiblePages(currentPage, totalPage);

    setVisiblePages(visiblePages);
  }, [currentPage, totalPage, getVisiblePages]);

  return (
    <Row className='mt-8 mb-4'>
      <Col xs={12} lg={7} className='d-flex align-items-center'>
        <Form.Group className='d-flex align-items-center'>
          <Form.Label className='me-2 mb-0'>Display</Form.Label>
          <Form.Select
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            style={{ width: '115px' }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize} rows
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <div className='ms-sm-3 me-sm-3'>
          Page <strong>{currentPage}</strong> of <strong>{totalPage}</strong>
        </div>

        <Form.Group className='d-flex align-items-center'>
          <Form.Label className='me-2 mb-0' htmlFor='goToPage'>
            Go to page
          </Form.Label>
          <Form.Control
            type='number'
            value={currentPage}
            onChange={(e) => setPage(Number(e.target.value))}
            style={{ width: '80px' }}
            id='goToPage'
          />
        </Form.Group>
      </Col>
      {totalPage > 1 && (
        <Col
          xs={12}
          lg={5}
          className='d-flex justify-content-end align-items-center'
        >
          <Pagination className='mb-0'>
            <Pagination.Prev
              disabled={false}
              onClick={() => setPage(currentPage - 1)}
            >
              <KTIcon iconName='double-left-arrow' />
            </Pagination.Prev>

            {(visiblePages || []).map((page, index, array) => {
              return array[index - 1] + 1 < page ? (
                <React.Fragment key={page.toString()}>
                  <Pagination.Item>...</Pagination.Item>
                  <Pagination.Item
                    active={page === currentPage}
                    onClick={() => setPage(page)}
                  >
                    {page}
                  </Pagination.Item>
                </React.Fragment>
              ) : (
                <Pagination.Item
                  key={page.toString()}
                  active={page === currentPage}
                  onClick={() => setPage(page)}
                >
                  {page}
                </Pagination.Item>
              );
            })}

            <Pagination.Next
              disabled={false}
              onClick={() => setPage(currentPage + 1)}
            >
              <KTIcon iconName='double-right-arrow' />
            </Pagination.Next>
          </Pagination>
        </Col>
      )}
    </Row>
  );
};
