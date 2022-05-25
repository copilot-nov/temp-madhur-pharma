import { Tab } from '@headlessui/react'
import MaterialManagment from './material-managment'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ManufactureTemplateTabs(props) {
  const { closeModal, setHandleResponse } = props


  return (
    <div className="w-full sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-300 p-1">
          {listOftabs.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-green-700',
                  'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-green-900 hover:bg-white/[0.12] hover:text-green-900'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2'
            )}
          >
            <MaterialManagment closeModal={closeModal} setHandleResponse={setHandleResponse} />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2'
            )}
          >
            <MaterialManagment closeModal={closeModal} setHandleResponse={setHandleResponse} />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2'
            )}
          >
            <MaterialManagment closeModal={closeModal} setHandleResponse={setHandleResponse} />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2'
            )}
          >
            <MaterialManagment closeModal={closeModal} setHandleResponse={setHandleResponse} />
          </Tab.Panel>
          
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}


const listOftabs = [
  'Tab1',
  'Tab2',
  'Tab3',
  'Tab4',
]