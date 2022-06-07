import { Tab } from '@headlessui/react'
import ProcessMaster from './process-master'
import ProductForField from './productFor-field'
import SubSection from './sub-sections'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const processMasterTab = [
  { tabName: 'Ingredient Dispensing' },
  { tabName: 'Product Manufacturing' },
  { tabName: 'Product Unloading' },
  { tabName: 'Packing Material Dispensing' },
  { tabName: 'Cleaning & Inspection' },
  { tabName: 'Data Coding' },
  { tabName: 'Filling & Packing' },
  { tabName: 'Weighing' },
  { tabName: 'Dispatch' },
]

export default function ManufactureTemplateTabs(props) {
  const { tabsName, select, handleSelect, processMasterList } = props
  // console.log(processMasterList)

  return (
    <div className="w-full sm:px-0 h-100">
      <Tab.Group>
        <Tab.List className="flex space-x-1 bg-gray-300">
          <Tab
            className={({ selected }) =>
              classNames('px-4  py-2.5 text-sm font-medium leading-5', 'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2', selected ? 'bg-green-700 shadow text-white' : 'text-green-900 hover:bg-white/[0.12] hover:text-green-900')}>
            Product Formulation
          </Tab>
          {tabsName.map((tab) => {
            return tab !== 'Product Formulation' && (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames('px-4  py-2.5 text-sm font-medium leading-5', 'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2', selected ? 'bg-green-700 shadow text-white' : 'text-green-900 hover:bg-white/[0.12] hover:text-green-900')}>
                {tab}
              </Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          {
            processMasterTab?.map((tab) => {
              // console.log(tab?.tabName)
              return tabsName?.includes(tab?.tabName) && (
                
                <Tab.Panel
                  key={tab?.tabName}
                  className={classNames('bg-white pt-3', 'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2')}>
                  <div style={{ height: '80%' }}><SubSection subTab={tab?.tabName} /></div>
                </Tab.Panel>
              )
            })
          }

          <Tab.Panel className={classNames('bg-white pt-3', 'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2')}>
            <ProductForField />
            <br />
            <ProcessMaster processMasterList={processMasterList} select={select} handleSelect={handleSelect} />
          </Tab.Panel>

        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
