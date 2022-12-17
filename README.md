# vp_react_modale
Modal component for React

![JavaScript](https://img.shields.io/badge/Language-JS-yellow) ![REACT](https://img.shields.io/badge/Framework-React-blue)

Getting Started. <br>
This project was powered with Create React App and use <br>
  - React (18.2.0)

[Visual Studio Code](https://code.visualstudio.com/) is recommended to edit and launch this project.
<br>

## Installation

```shell
npm i vp_react_modale
```

## How to use

1. Import modal component: <br>
```shell
import { Modal } from 'vp_react_modale';
```

2. Create a const to open and close modale: <br>
```shell
const [isOpen, setIsOpen] = useState(false);
```

3. Create a const to set your message: <br>
```shell
const textModal = 'Your message.';
```

4. Set modal's props: <br>
```shell
<Modal content={message} trigger={isOpen} setTrigger={setIsOpen} />
```

## Props
| Props      | Type     | Description                     | Default           |
|------------|----------|---------------------------------|-------------------|
| content    | String   | The message showed by the modal | n/a               |
| trigger    | Boolean  | Open or close modal             | False             |
| setTrigger | Function | Toggle trigger state            | setTrigger(false) |

## GitHub
https://github.com/ValentinPierre-dev/vp_react_modale
