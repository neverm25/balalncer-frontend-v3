import { HStack, IconButton } from '@chakra-ui/react'
import { FiList, FiGrid } from 'react-icons/fi'
import { usePoolListViewType } from '../usePoolListViewType'

export function PoolListViewType() {
  const { setViewType } = usePoolListViewType()
  return (
    <HStack>
      <IconButton icon={<FiList />} aria-label="list" onClick={() => setViewType('list')} />
      <IconButton icon={<FiGrid />} aria-label="grid" onClick={() => setViewType('grid')} />
    </HStack>
  )
}
