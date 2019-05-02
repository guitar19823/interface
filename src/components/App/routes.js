import { Menu, Settings, Contacts, NotFound } from '../Pages';

import objects from '../../img/objects.png';
import fly from '../../img/fly.png';
import chat from '../../img/chat.png';
import contacts from '../../img/contacts.png';
import settings from '../../img/settings.png';

const routes = [
	{
		path: '/',
		name: 'Menu',
		component: Menu,
		exact: true
	},
	{
		path: '/objects',
		name: 'Objects',
		component: Settings,
		exact: true,
		img: objects
	},
	{
		path: '/fly',
		name: 'Fly',
		component: Settings,
		exact: true,
		img: fly
	},
	{
		path: '/chat',
		name: 'Chat',
		component: Settings,
		exact: true,
		img: chat
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Settings,
		exact: true,
		img: settings
	},
	{
		path: '/contacts',
		name: 'Contacts',
		component: Contacts,
		exact: true,
		img: contacts
	},
	{
		name: 'NotFound',
		component: NotFound,
		exact: false
	}
];

export default routes;