# React Quick Modal
[![npm version](https://badge.fury.io/js/react-quick-modal.svg)](https://badge.fury.io/js/react-quick-modal)
![npm](https://img.shields.io/npm/dw/react-quick-modal)

A minimalist, easy to setup and style, React modal component.

Default behavior and styling properties are limited and opinionated by design for quick usage/ease of use. For full control, you can pass custom HTML or React components to the title, content and button props of the modal.

## Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Properties](#properties)
  - [open](#open)
  - [onClose](#onClose)
  - [content](#content)
  - [title](#title)
  - [buttons](#buttons)
  - [width](#width)
  - [height](#height)
  - [closable](#closable)
  - [trapFocus](#trapFocus)
  - [portalSelector](#portalSelector)
  - [dimBackground](#dimBackground)
- [Button Properties](#button-properties)
  - [label](#label)
  - [variant](#variant)
  - [color](#color)
  - [onClick](#onClick)
  - [timer](#timer)
- [Styling](#styling)

## Installation

To install this modal component, run:

```bash
npm install react-quick-modal
```

## Basic Usage

Import the modal in your React component:

```javascript
import Modal from 'react-quick-modal';
```

Use the modal in your code:

```javascript
function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        title="Modal Title"
        content="This is the content of the  modal."
        // Required for modal to open/close
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
```

**_Note:_** _`open` and `onClose` are required. `open` is a boolean value dictating wether to display the modal or not, and `onClose` is the setter function of this boolean value. For the modal to be able to close when a button is clicked, it needs to have access to both of these, passed in from its parent component. See example above._

## Properties

The modal component accepts the following properties:

| Property                            | Type                                                                                                                                               | Required | Default Value |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| [`open`](#open)                     | `boolean`                                                                                                                                          | true     | true             |
| [`onClose`](onClose)                | `() => void`                                                                                                                                       | true     | -             |
| [`content`](#content)               | `string` \| `JSX.Element` \|`ReactNode`                                                                                                            | true     | -             |
| [`title`](#title)                   | `string` \| `JSX.Element` \| `ReactNode`                                                                                                           | false    | -             |
| [`buttons`](#buttons)               | `[]` \| [`ButtonProperties[]`](#button-properties) \| `JSX.Element` \| `ReactNode` | false    | -             |
| [`width`](#width)                   | `string`                                                                                                                                           | false    | -             |
| [`height`](#height)                 | `string`                                                                                                                                           | false    | -             |
| [`closable`](#closable)             | `boolean`                                                                                                                                          | false    | false         |
| [`trapFocus`](#trapFocus)           | `boolean`                                                                                                                                          | false    | true          |
| [`portalSelector`](#portalSelector) | `string`                                                                                                                                           | false    | -             |
| [`dimBackground`](#dimBackground)   | `boolean`                                                                                                                                          | false    | true          |

### open

- Type: `boolean`
- **_Required: `true`_**

A boolean value indicating whether the modal is open or not.

### onClose

- Type: `() => void`
- **_Required: `true`_**

A callback function that should turn the above property `open` back to `false` to close the modal.


**_Note:_** By default, all the buttons will close the modal. The clicked button will first run its `onClick` callback, if you gave it one, and immediatly after it will run the `onClose` function. This is an opinionated default as it covers most use cases. If you want a button that keeps the modal open when clicked, you can do so by passing in custom HTML or React node instead of an array of [Button objects](#button-properties). Then, the `onClick` you provide on these will not be wrapped with `onClose`.
Likewise, if you **DO** want your custom HTML/React component button to close the modal, you need to pass the same function as your `onClose` to its `onClick` attribute.

### content

- Type: `string | JSX.Element | ReactNode`
- **_Required: `true`_**

The content of the modal. Can be a string, or an HTML element/React component for more customization.

### title

- Type: `string | JSX.Element | ReactNode`
- Required: `false`

The title of the modal.

### buttons

- Type: `[]` | [`ButtonProperties[]`](#button-properties) | `JSX.Element` | `ReactNode`
- Required: `false`

An array of [Button properties](#button-properties) that will be displayed as buttons in the modal. Maximum of 2 buttons by default. If more are needed, you can pass in custom HTML.

### width

- Type: `string`
- Required: `false`

***example**: `"400px"`*

A string for the CSS property "width". It is handled by default but you can customize using this property if your use case requires it. The actual content of the modal is scrollable so you can have long text and it will display just fine. You have to pass in a unit (px, vw, %...) and a value superior to 300px (as its the minimum width by default).

**_Note:_** This value determines the width of the actual content of the modal, not the modal itself, so it doesn't include padding. Padding would need to be handled by styling `.modal__container`

### height

- Type: `string`
- Required: `false`

***example**: `"400px"`*

A string for the CSS property "height". Works the same as the [width](#width) property.

### closable

- Type: `boolean`
- Required: `false`
- Default: `false`

A boolean value that if true will display a small close button icon on the upper right corner of the modal. If `false`, the modal remains closable through other means (other buttons, escape key).

### trapFocus

- Type: `boolean`
- Required: `false`
- Default: `true`

A boolean value indicating whether the focus should be trapped within the modal or not. `true` by default.

**_Note:_** If you don't put any "tabbable" elements such as buttons in your modal, you will get an error. Focus can only be trapped if there is something to focus. If for some reason you need to have a modal without any buttons, set `trapFocus: false`

### portalSelector

- Type: `string`
- Required: `false`

***example**: `"#portal"`*

A string selector that specifies the DOM element to which the modal should be appended as a child. Uses `React.createPortal()` under the hood. Only specify if you are using portals.

### dimBackground

- Type: `boolean`
- Required: `false`
- Default: `true`

Dims the background slightly. `true` by default.

## Button Properties

`Button` objects accept the following properties:

| Property  | Type                                     | Required | Default value      |
| --------- | ---------------------------------------- | -------- | ------------------ |
| [`label`](#label)   | `string` \| `JSX.Element` \| `ReactNode` | `true`   | -                  |
| [`variant`](#variant) | `"secondary"`                            | `false`  | -                  |
| [`color`](#color)   | `string`                                 | `false`  | -                  |
| [`onClick`](#onClick) | `() => void`                             | `false`  | `() => onClose();` |
| [`timer`](#timer)   | `number` (seconds)                       | `false`  | -                  |

### label

- Type: `string | JSX.Element | ReactNode`
- **_Required: `true`_**

Text to display on the button.

### variant

- Type: `"secondary"`
- Required: `false`

The only available value is 'secondary'. Set `variant: "secondary"` to get a differently styled button. Appends the class `.modal__btn--secondary` to the button, which you can modify in your CSS.

### color

- Type: `string`
- Required: `false`

***example**: `'#fff'`, `'blue'`, `'var(--accent-color)'`*

Quick way to change background color of a button. All valid css values will work. For more control, style the classes `.modal__btn` and `.modal__btn--secondary` instead.

### onClick

- Type: `() => void`
- Required: `false`

A callback function that performs an action when the button is clicked.

### timer

- Type: `number`
- Required: `false`

Takes in an integer (in seconds). Disables the button for the given time and displays the countdown to the user. Useful for certain situations where you need to make sure the message is read carefuly before proceeding, like in a _"Are you sure you want to delete everything?''_ scenario. `rm -rf *` 😈

## Styling

You have 2 choices when it comes to styling:

Either pass in your custom HTML / React components directly to the `title`, `content` and `buttons` props.

OR overwrite the default style by modifying the classes directly in your CSS.
**_Note:_** Class names use the BEM convention.

In most cases, you should only need to touch the following classes:

- `.modal__title`
- `.modal__content`
- `.modal__btn` & `.modal__btn--secondary`

And:

- `.modal__container` (for shadow, padding,...)
- `.modal__bg` (_when `dimBackground = true`, for dim opacity, blur..._)

Here is the full structure:

```html
<!-- If dimBackground === true -->
<div class="modal__bg" />

<div class="modal__container">
	<div class="modal">
		<!-- If closable === true -->
		<button class="modal__close-btn" />

		<!-- Header -->
		<div class="modal__header">
			<h2 class="modal__title" />
		</div>

		<!-- Body -->
		<div class="modal__body">
			<p class="modal__content"/>
		</div>

		<!-- Footer -->
		<div class="modal__footer">
			<button class="modal__btn"/>
			<button class="modal__btn modal__btn--secondary"/>
		</div>
	</div>
</div>
```
