export default {
  header: 'Button',
  description: 'This is a customizable button component.',
  snippet:
        `<ao-button primary>
  I'm a button
</ao-button>`,
  apiRows: [
    { name: 'formName', type: 'String', default: 'null', description: 'Binds to a form.' },
    { name: 'type', type: 'String (button or submit)', default: 'button', description: 'Defines type of button.' },
    { name: 'primary', type: 'Boolean', default: 'false', description: 'Adds a class to indicate a primary action eg. submission, confirmation.' },
    { name: 'destructive', type: 'Boolean', default: 'false', description: 'Adds a class to indicate a destructive action eg. deletion, permanent irreversible action.' },
    { name: 'caution', type: 'Boolean', default: 'false', description: 'Adds a class to indicate a cautious action eg. reversible powerful change.' },
    { name: 'subtle', type: 'Boolean', default: 'false', description: 'Displays a more subtle version of the default button.' },
    { name: 'small', type: 'Boolean', default: 'false', description: 'Displays a small sized button.' },
    { name: 'large', type: 'Boolean', default: 'false', description: 'Displays a large sized button.' },
    { name: 'jumbo', type: 'Boolean', default: 'false', description: 'Displays a jumbo sized button.' },
    { name: 'naked', type: 'Boolean', default: 'false', description: 'Displays a style that lacks the visual properties of a button.' },
    { name: 'link', type: 'Boolean', default: 'false', description: 'Displays a style that looks like a link.' },
    { name: 'textOnly', type: 'Boolean', default: 'false', description: 'Displays a style that looks like regular text.' },
    { name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables the button.' }
  ]
}
