import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/20/solid'

const items = [
]

export default function PageNav() {
  return (
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav className="isolate inline-flex -space-x-3 rounded-md" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-gray-400 hover:text-amber-400 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Start</span>
              <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-gray-400 hover:text-amber-400 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-amber-500 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:text-amber-400 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:text-amber-400 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:text-amber-400 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              4
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:text-amber-400 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:text-amber-400 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">End</span>
              <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
    </div>
  )
}
