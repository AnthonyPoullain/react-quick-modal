/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { StoryFn } from '@storybook/react';
import Modal, { ModalProperties } from './Modal';
import '../../App.css';

export default {
	title: 'Modal',
	component: Modal,
	parameters: {
		previewTabs: {
			'storybook/docs/panel': { hidden: true },
		},
		viewMode: 'canvas',
	},
};

const Template: StoryFn<typeof Modal> = (args: ModalProperties) => (
	<Modal {...args} trapFocus={false} />
);

export const Default = Template.bind({});
Default.args = {
	title: 'Confirmation',
	content: 'This is a message',
};

export const Closable = Template.bind({});
Closable.args = {
	title: 'Information',
	content: 'This is a message',
	closable: true,
	buttons: [],
};

export const TwoButtons = Template.bind({});
TwoButtons.args = {
	title: 'Are you sure?',
	content: 'This action cannot be undone.',
	buttons: [{ label: 'Delete', variant: 'secondary' }, { label: 'Cancel' }],
};

export const TimerButton = Template.bind({});
TimerButton.args = {
	title: 'Are you sure?',
	content: 'This action cannot be undone.',
	buttons: [
		{ label: 'Delete', variant: 'secondary', timer: 5 },
		{ label: 'Cancel' },
	],
};

export const LargeTextContent = Template.bind({});
LargeTextContent.args = {
	title: 'Terms of use',
	content:
		'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
	buttons: [{ label: 'Accept' }, { label: 'Decline', variant: 'secondary' }],
};

export const CustomHTMLContent = Template.bind({});
const employeeForm = (
	<form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
		<label style={{ fontWeight: 'bold' }} htmlFor="firstname">
			FirstName
		</label>
		<input
			style={{
				padding: '10px',
				borderRadius: '5px',
				border: '1px solid var(--grey-200)',
			}}
			type="text"
			name="firstname"
		/>
		<label style={{ fontWeight: 'bold' }} htmlFor="lastname">
			LastName
		</label>
		<input
			style={{
				padding: '10px',
				borderRadius: '5px',
				border: '1px solid var(--grey-200)',
			}}
			type="text"
			name="lastname"
		/>
	</form>
);

CustomHTMLContent.args = {
	title: 'Create Employee',
	content: employeeForm,
	closable: true,
	buttons: [{ label: 'Submit' }],
};
