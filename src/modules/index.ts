//TODOS: Config thành module dạng object, có 1 properties là array các route, khi import vào index.js sẽ foreach rồi use các phần tử trong properties

import mailRoute from './mail/mail.route'

const routes = [mailRoute]

export { routes }
