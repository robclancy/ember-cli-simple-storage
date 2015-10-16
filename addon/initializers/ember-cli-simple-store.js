import Store from '../store';

export default function() {
    var application = arguments[1] || arguments[0];
    application.register('storage:main', Store);
    application.inject('controller', 'storage', 'storage:main');
    application.inject('route', 'storage', 'storage:main');
}
