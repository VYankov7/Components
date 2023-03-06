// import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
// import Button from "./components/Button";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 'asdacx',
      label: 'Can I use React on a project?', 
      content: 'You can use React on any project you want.You can use React on any project you want.' 
    },
    {
      id: 'asdacxasdax',
      label: 'Can I use JavaScript on a project?',
      content: 'You can use React on any project you want.You can use React on any project you want.'
    },
    {
      id: 'asdacxxasxq',
      label: 'Can I use CSS on a project?',
      content: 'You can use React on any project you want.You can use React on any project you want.'
    }
  ];;
  
  return <Accordion items={items}/>
}

export default AccordionPage;
