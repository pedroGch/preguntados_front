const paginator = ({ count, total, total_pages }) => {
  return {
    current: count > 0 ? 1 : 0,
    count,
    total,
    total_pages,

    get hasPages() {
      return this.total_pages > 1
    },

    get isEmptyPaginator() {
      return this.count === 0 && this.total === 0 && this.total_pages === 0
    },
  }
}

const emptyPaginator = () => paginator({ count: 0, total: 0, total_pages: 0 })

export { paginator, emptyPaginator }
