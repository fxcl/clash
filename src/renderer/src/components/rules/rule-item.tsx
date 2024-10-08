import { Card, CardBody } from '@nextui-org/react'
import React from 'react'

const RuleItem: React.FC<IMihomoRulesDetail> = (props) => {
  const { type, payload, proxy } = props
  return (
    <Card className="mb-2 mx-2">
      <CardBody className="w-full">
        <div className="text-ellipsis whitespace-nowrap overflow-hidden">{payload}</div>
        <div className="flex justify-start text-default-500">
          <div>{type}</div>
          <div className="ml-2">{proxy}</div>
        </div>
      </CardBody>
    </Card>
  )
}

export default RuleItem
