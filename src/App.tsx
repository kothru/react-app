import { Button } from "./libs/Button"
import { Heading } from "./libs/Heading"
import { Input } from "./libs/Input"
import { Text } from "./libs/Text"
import { TextArea } from "./libs/Textarea"

export const App = () => {
  return (
    <>
      <Text text="true" />
      <Heading tag="h1">
        <span>hello</span>
      </Heading>
      <Button onClick={() => console.log('clicked')} title="Button" type="primary" width={96} />
      <Button onClick={() => console.log('clicked')} title="Button" type="secondary" />
      <Button onClick={() => console.log('clicked')} title="Button" type="error" />
      <TextArea width={500} maxLength={100} />
      <Input type="text" error />
    </>
  )
}