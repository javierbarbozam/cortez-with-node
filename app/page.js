import { Button } from '@chakra-ui/react'
import { Card, CardBody, Text } from '@chakra-ui/react'
import CardImgLeft from './components/CardImgLeft'
import CardApp from './components/CardApp'
import MissionCard from './components/MissionCard'

export default function Home() {
  return (
    <main>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Button fontSize={{ base: "24px", md: "40px", lg: "56px" }}  bgColor={{ base: "yellow", md: "black", lg: "red" }}>Welcome</Button>
      <Button fontSize={["24px", "40px", "56px"]}  bgColor={{ base: "yellow", md: "black", lg: "red" }}>Welcome</Button>
      <CardImgLeft/>
      <CardApp/>
      <MissionCard/>
    </main>
  )
}
