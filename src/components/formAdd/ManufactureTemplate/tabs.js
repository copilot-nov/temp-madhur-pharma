import { Tab } from '@headlessui/react'
import ProcessMaster from './process-master'
// import MaterialManagment from './material-managment'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Tab1 = () => { return (<div className='h-90 w-full'>Ingredient Dispensing</div>) }
const Tab2 = () => { return (<div className='h-90 w-full'>Product Manufacturing</div>) }
const Tab3 = () => { return (<div className='h-90 w-full'>Product Unloading</div>) }
const Tab4 = () => { return (<div className='h-90 w-full'>Packing Material Dispensing</div>) }
const Tab5 = () => { return (<div className='h-90 w-full'>Cleaning & Inspection</div>) }
const Tab6 = () => { return (<div className='h-90 w-full'>Data Coding</div>) }
const Tab7 = () => { return (<div className='h-90 w-full'>Filling & Packing</div>) }
const Tab8 = () => { return (<div className='h-90 w-full'>Weighing</div>) }
const Tab9 = () => { return (<div className='h-90 w-full'>Dispatch</div>) }

const processMasterList = [
  { tabName: 'Ingredient Dispensing', com: <Tab1 /> },
  { tabName: 'Product Manufacturing', com: <Tab2 /> },
  { tabName: 'Product Unloading', com: <Tab3 /> },
  { tabName: 'Packing Material Dispensing', com: <Tab4 /> },
  { tabName: 'Cleaning & Inspection', com: <Tab5 /> },
  { tabName: 'Data Coding', com: <Tab6 /> },
  { tabName: 'Filling & Packing', com: <Tab7 /> },
  { tabName: 'Weighing', com: <Tab8 /> },
  { tabName: 'Dispatch', com: <Tab9 /> },
]
export default function ManufactureTemplateTabs(props) {
  const { tabsName, select, handleSelect, processMasterList } = props

  return (
    <div className="w-full sm:px-0 h-100">
      <Tab.Group>
        <Tab.List className="flex space-x-1 bg-gray-300 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                'px-4  py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2',
                selected
                  ? 'bg-green-700 shadow text-white'
                  : 'text-green-900 hover:bg-white/[0.12] hover:text-green-900'
              )
            }
          >
            Product Formulation
          </Tab>
          {tabsName.map((tab) => {
            return tab !== 'Product Formulation' && (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    'px-4  py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-green-700 shadow text-white'
                      : 'text-green-900 hover:bg-white/[0.12] hover:text-green-900'
                  )
                }
              >
                {tab}
              </Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          {
            processMasterList?.map((tab) => {
              return tabsName?.includes(tab?.tabName) && (
                <Tab.Panel
                  key={tab?.tabName}
                  className={classNames(
                    'bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2'
                  )}
                >
                  <div style={{ height: '80%' }}>{tab?.com}</div>
                </Tab.Panel>
              )
            })
          }

          <Tab.Panel
            className={classNames(
              'bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2'
            )}
          >
            <ProcessMaster processMasterList={processMasterList} select={select} handleSelect={handleSelect} />
          </Tab.Panel>

        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
